import { describe, it, expect } from 'vitest';
import { Vector3 } from '../../src/raytracer/Vector3';

describe('Vector3', () => {
    describe('reflect', () => {
        it('should correctly reflect a vector off a surface normal', () => {
            // Incoming vector (V) hitting a surface at 45 degrees
            // pointing down and right: (1, -1, 0)
            const v = new Vector3(1, -1, 0);

            // Surface normal (N) pointing up: (0, 1, 0)
            const n = new Vector3(0, 1, 0);

            // Expected reflection (R) should point up and right: (1, 1, 0)
            // Formula: R = V - 2(V.N)N
            // V.N = 1*0 + (-1)*1 + 0*0 = -1
            // 2(V.N)N = 2(-1)(0, 1, 0) = (0, -2, 0)
            // R = (1, -1, 0) - (0, -2, 0) = (1, 1, 0)

            const r = v.reflect(n);

            expect(r.x).toBeCloseTo(1);
            expect(r.y).toBeCloseTo(1);
            expect(r.z).toBeCloseTo(0);
        });

        it('should return the same vector if reflecting against a perpendicular normal (grazing angle 90 deg)', () => {
            // V = (1, 0, 0)
            // N = (0, 1, 0)
            // V.N = 0
            // R = V - 0 = V
             const v = new Vector3(1, 0, 0);
             const n = new Vector3(0, 1, 0);
             const r = v.reflect(n);

             expect(r.x).toBeCloseTo(1);
             expect(r.y).toBeCloseTo(0);
             expect(r.z).toBeCloseTo(0);
        });

        it('should return the reversed vector if hitting normal head on', () => {
            // V = (0, -1, 0)
            // N = (0, 1, 0)
            // V.N = -1
            // R = (0, -1, 0) - 2(-1)(0, 1, 0) = (0, -1, 0) + (0, 2, 0) = (0, 1, 0)
            const v = new Vector3(0, -1, 0);
            const n = new Vector3(0, 1, 0);
            const r = v.reflect(n);

            expect(r.x).toBeCloseTo(0);
            expect(r.y).toBeCloseTo(1);
            expect(r.z).toBeCloseTo(0);
        });
    });
});
