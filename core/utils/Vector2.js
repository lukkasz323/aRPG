export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    normalize() {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        // Avoid division by zero
        if (magnitude === 0) {
            this.x = 0;
            this.y = 0;
        }
        else {
            this.x = this.x / magnitude;
            this.y = this.y / magnitude;
        }
    }
}
