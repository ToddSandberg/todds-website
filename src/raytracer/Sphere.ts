import { Vector3 } from './Vector3';

type IntersectResult = {
    didIntersect: boolean,
    intersectPoint1?: number,
    intersectPoint2?: number
}

export class Sphere {
    position: Vector3;
    radius: number;
    surfaceColor: Vector3;
    reflectivity?: number;
    transparency?: number;
    emissionColor?: Vector3;

    constructor(
        position: Vector3,
        radius: number,
        surfaceColor: Vector3,
        reflectivity?: number,
        transparency?: number,
        emissionColor?: Vector3
    ){
        this.position = position;
        this.radius = radius;
        this.surfaceColor = surfaceColor;
        this.reflectivity = reflectivity;
        this.transparency = transparency;
        this.emissionColor = emissionColor;
    }

    intersect(rayorig: Vector3, raydir: Vector3): IntersectResult {
        // Length from origin to spheres center
        const l = this.position.minus(rayorig);

        const tca = l.dot(raydir);
        // If dot product is negative that means its behind the origin
        if (tca < 0) {
            console.log('sphere behind origin');
            return {didIntersect: false };
        }
        // Squared distance from the sphere center to the closest point on ray
        const d2 = l.dot(l) - tca * tca;
        // If the distance squared is greater than the radius squared, it didnt hit
        const radiusSquared = this.radius * this.radius;
        if (d2 > radiusSquared) {
            console.log('distance is greate than radius');
            console.log(radiusSquared);
            console.log(d2);
            return { didIntersect: false };
        }
        // distance from intersection to surface of sphere
        const thc = Math.sqrt(radiusSquared - d2);
        // First intersection point
        const intersectPoint1 = tca - thc;
        // second intersection point
        const intersectPoint2 = tca + thc;

        return {
            didIntersect: true,
            intersectPoint1,
            intersectPoint2
        };
    }
}