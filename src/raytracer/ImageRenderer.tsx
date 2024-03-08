import React, { useEffect } from 'react';
import { Vector3 } from './Vector3';

type Props = {
    colors: (Vector3|null)[][],
    width: number,
    height: number
}

export default function ImageRenderer({ colors, width, height }: Props) {

  useEffect(() => {
    var canvas = document.getElementById('rasterCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Calculate the width and height of each pixel
        const pixelWidth = width / colors.length;
        const pixelHeight = height / colors[0].length;

        // Loop through the colors array and render each color
        for (var x = 0; x < colors.length; ++x) {
            for (var y = 0; y < colors[x].length; ++y) {
                const color = colors[x][y];
                // Set the fill color
                ctx.fillStyle = `rgb(
                    ${color ? color.x * 255 : 0}
                    ${color ? color.y * 255 : 0}
                    ${color ? color.z * 255 : 0}
                )`;

                // Draw a rectangle (pixel) of the specified color
                ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
            }
        }
    } else {
        console.error("No context");
    }
  }, [colors, width, height]);

  return <canvas id="rasterCanvas" width={width} height={height} />;
};