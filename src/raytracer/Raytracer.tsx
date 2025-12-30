import React, { useState } from 'react';
import Tabs, { TabType } from '../common/Tabs';
import './Raytracer.css';
import ImageRenderer from './ImageRenderer';
import { Vector3 } from './Vector3';
import { Sphere } from './Sphere';
import Slider from '../common/Slider';

const M_PI = 3.141592653589793;
const MAX_RAY_DEPTH = 5;

function mix(a: number, b: number, mix: number) {
    return b * mix + a * (1 - mix);
}

/**
 * Calculates the Fresnel effect.
 * The Fresnel effect describes how the reflection of a surface changes based on the viewing angle.
 * At grazing angles (where the light hits the surface almost parallel to it), the surface becomes more reflective.
 *
 * @param facingRatio The dot product of the view direction and the surface normal.
 * @param mixValue A value to tweak the effect strength.
 * @returns The Fresnel factor.
 */
function calculateFresnelEffect(facingRatio: number, mixValue: number) {
    // This is an approximation of the Fresnel equations (Schlick's approximation or similar).
    // Math.pow(1 - facingRatio, 3) increases the reflection as the angle becomes more grazing.
    return mix(Math.pow(1 - facingRatio, 3), 1, mixValue);
}

function trace(rayOrigin: Vector3, rayDirection: Vector3, spheres: Sphere[], depth: number) {
    let tnear = Number.MAX_SAFE_INTEGER;
    let closestSphere;

    // Find the closest intersecting sphere
    for (let i = 0; i < spheres.length; ++i) {
        const intersetResult = spheres[i].intersect(rayOrigin, rayDirection);
        // Does the ray intersect with the sphere
        if (intersetResult.didIntersect && intersetResult.intersectPoint1 && intersetResult.intersectPoint2) {
            if (intersetResult.intersectPoint1 < 0) intersetResult.intersectPoint1 = intersetResult.intersectPoint2;
            if (intersetResult.intersectPoint1 < tnear) {
                tnear = intersetResult.intersectPoint1;
                closestSphere = spheres[i];
            }
        }
    }

    // if there's no intersection return black or background color
    if (!closestSphere) return new Vector3(2, 2, 2);

    let surfaceColor = new Vector3(0, 0, 0);
    // The origin of the ray plus the vector to nearest
    const pointOfIntersection = rayOrigin.plus(rayDirection.times(tnear));
    // normal at the intersection point, by going from center of sphere to intersection point
    const intersectionNormal = pointOfIntersection.minus(closestSphere.position);
    intersectionNormal.normalize(); // normalize normal direction

    // If the normal and the view direction are not opposite to each other
    // reverse the normal direction. That also means we are inside the sphere so set
    // the inside bool to true. Finally reverse the sign of IdotN which we want
    // positive.
    let insideOfSphere = false;
    if (rayDirection.dot(intersectionNormal) > 0){
        intersectionNormal.reverse();
        insideOfSphere = true;
    }

    const bias = 1e-4; // add some bias to the point from which we will be tracing
    if (((closestSphere.transparency && closestSphere.transparency > 0)
    || (closestSphere.reflectivity && closestSphere.reflectivity > 0)) && depth < MAX_RAY_DEPTH) {
        const facingratio = rayDirection.newReverse().dot(intersectionNormal);

        // Calculate the Fresnel effect to determine how much light is reflected vs refracted
        const fresneleffect = calculateFresnelEffect(facingratio, 0.1);

        // Compute reflection direction using the helper method.
        const refldir = rayDirection.reflect(intersectionNormal);
        // We normalize it to ensure the direction vector has length 1.
        refldir.normalize();

        const reflection = trace(pointOfIntersection.plus(intersectionNormal.times(bias)), refldir, spheres, depth + 1);
        let refraction = new Vector3(0, 0, 0);
        // if the sphere is also transparent compute refraction ray (transmission)
        if (closestSphere.transparency) {
            const ior = 1.1, eta = insideOfSphere ? ior : 1 / ior; // are we inside or outside the surface?
            const cosi = -intersectionNormal.dot(rayDirection);
            const k = 1 - eta * eta * (1 - cosi * cosi);
            const refrdir = rayDirection.times(eta).plus(intersectionNormal.times(eta * cosi - Math.sqrt(k)));
            refrdir.normalize();
            refraction = trace(pointOfIntersection.minus(intersectionNormal.times(bias)), refrdir, spheres, depth + 1);
        }
        // the result is a mix of reflection and refraction (if the sphere is transparent)
        surfaceColor = (
            reflection.times(fresneleffect).plus(
                refraction.times(1 - fresneleffect).times(closestSphere.transparency ? closestSphere.transparency : 1)
            )
        ).timesVector(closestSphere.surfaceColor);
    }
    else {
        // it's a diffuse object, no need to raytrace any further
        for (let i = 0; i < spheres.length; ++i) {
            if (spheres[i].emissionColor && spheres[i].emissionColor!.x > 0) {
                // TODO handle emission
            }
        }

        surfaceColor = closestSphere.surfaceColor;
    }

    //return surfaceColor + closestSphere.emissionColor;
    return surfaceColor;
}

function convertPixel(coord: number, inverse: number) {
    // Adding 0.5 makes it so you are sampling from middle of pixel
    const middleOfCoord = coord + 0.5;
    // Multiplying it by the inverse scales it to [0, 1]
    // Where 0 = one side and 1 = the other side
    return middleOfCoord * inverse;
}

function render(spheres: Sphere[], pixelSize: number) {
    const isSmallDevice = document.documentElement.clientWidth < 700;
    const actualWidth = isSmallDevice ? 320 : 640;
    const actualHeight = isSmallDevice ? 240 : 480;
    // set up image
    const width = actualWidth/pixelSize, height = actualHeight/pixelSize;
    // set up array for pixels
    const image: (Vector3|null)[][] = Array.from({ length: width }, () => Array.from({ length: height }, () => null)); // Initialize with null values

    const inverseWidth = 1 / width;
    const inverseHeight = 1 / height;

    const fov = 30;
    const aspectratio = width / height;
    // FOV angle in radians
    const angle = Math.tan(M_PI * 0.5 * fov / 180.0);

    // Trace rays for each pixel on the screen
    for (let x = 0; x < width; ++x) {
        for (let y = 0; y < height; ++y) {
            // Find ray direction
            // Normalize x/y to [-1, 1]
            // Pixel is converted to 0,1 range, then the 2 * x - 1 converts it from -1. 1 to normalize
            const normalizedX = (2 * convertPixel(x, inverseWidth) - 1);
            // The y value is opposite
            const normalizedY = (1 - 2 * convertPixel(y, inverseHeight));

            // I THINK multiplying only the x by the aspect ratio means y will remain constant and we will
            // stretch/squash the x value to fit the aspect ratio
            const xx = normalizedX * angle * aspectratio;
            const yy = normalizedY * angle;
            const raydir = new Vector3(xx, yy, -1);
            // Makes the resulting vector to be 1
            raydir.normalize();

            const color = trace(new Vector3(0,0,0), raydir, spheres, 0);
            image[x][y] = color;
            //console.log("color at image["+x+"]["+y+"]: " + image[x][y].x + " " + image[x][y].y + " " + image[x][y].z);
        }
    }

    return <ImageRenderer
        colors={image}
        width={actualWidth}
        height={actualHeight}
    />;
}

export default function Raytracer() {
    const [ spherePosition, setSpherePosition ] = useState(new Vector3(0.0, 0, -20));
    const [ sphereRadius, setSphereRadius ] = useState(4);
    const [ sphereSurfaceColor, setSphereSurfaceColor ] = useState(new Vector3(1.0, 0.32, 0.36));
    const [ sphereReflectivity, setSphereReflectivity ] = useState(1);
    const [ sphereTransparency, setSphereTransparency ] = useState(0.5);

    return <div className="App">
        <header className="Raytracer">
            <Tabs
                selectedTab={TabType.ABOUTME}
                appBarClass='Raytracer-Appbar Appbar-Common'
                appContentClass='Raytracer-App-content'
                dropdownClass='Raytracer-Dropdown Dropdown-Common'
            >
                <p>May run slow on some browsers. Programmed using only javascript/react.</p>
                <p>Drag sliders to affect the red ball. Should be able to see shadows and refraction as well.</p>
                <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing/how-does-it-work.html">Inspired by ScratchaPixel's Raytracer Primer</a>
                <div>
                    x: <Slider min={-10} max={10} value={spherePosition.x} ariaLabel="Sphere X position" onChange={(value) => setSpherePosition(new Vector3(value, spherePosition.y, spherePosition.z))}/>
                    y: <Slider min={-10} max={10} value={spherePosition.y} ariaLabel="Sphere Y position" onChange={(value) => setSpherePosition(new Vector3(spherePosition.x, value, spherePosition.z))}/>
                    z: <Slider min={-100} max={0} value={spherePosition.z} ariaLabel="Sphere Z position" onChange={(value) => setSpherePosition(new Vector3(spherePosition.x, spherePosition.y, value))}/>
                    radius: <Slider min={1} max={10} value={sphereRadius} ariaLabel="Sphere Radius" onChange={(value) => setSphereRadius(value)}/>
                    reflectivity: <Slider min={0} max={100} value={sphereReflectivity*100} ariaLabel="Sphere Reflectivity" onChange={(value) => setSphereReflectivity(value/100)}/>
                    transparency: <Slider min={0} max={100} value={sphereTransparency*100} ariaLabel="Sphere Transparency" onChange={(value) => setSphereTransparency(value/100)}/>
                    { render([
                        new Sphere(spherePosition, sphereRadius, sphereSurfaceColor, sphereReflectivity, sphereTransparency),
                        new Sphere(new Vector3(5.0, 0, -25), 3, new Vector3(0.65, 0.77, 0.97), 1, 0.0)
                    ], 10) }
                </div>
            </Tabs>
        </header>
    </div>;
}