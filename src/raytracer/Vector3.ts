export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    
    times(f: number) { return new Vector3(this.x * f, this.y * f, this.z * f); }
    timesVector(v: Vector3) { return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z); }
    minus(v: Vector3) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    plus(v: Vector3) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
    dot(v: Vector3) { return this.x * v.x + this.y * v.y + this.z * v.z; }

    // Ensures the vector has a length of 1
    normalize() {
        const squaredLength = this.length2();
        // If vector is 0 dont need to normalize
        if (squaredLength > 0) {
            // multiplies each component of vector by the inverse
            const invNor = 1 / Math.sqrt(squaredLength);
            this.x *= invNor;
            this.y *= invNor;
            this.z *= invNor;
        }
        return this;
    }

    // Calculates the squared length of the vector
    length2() { return this.x * this.x + this.y * this.y + this.z * this.z; }

    reverse() { this.x = -this.x; this.y = -this.y; this.z = -this.z; }
    newReverse() { return new Vector3(-this.x, -this.y, -this.z); }

    /**
     * Reflects the vector around a normal.
     * Formula: R = V - 2 * (V . N) * N
     * @param normal The normal vector to reflect around. Should be normalized.
     */
    reflect(normal: Vector3) {
        return this.minus(normal.times(2 * this.dot(normal)));
    }

    toArray() { return [this.x, this.y, this.z]; }
}