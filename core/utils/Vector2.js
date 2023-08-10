export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    normalize() {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        if (magnitude === 0) { // Avoid division by zero
            this.x = 0; //
            this.y = 0; //
        }
        else {
            this.x = this.x / magnitude;
            this.y = this.y / magnitude;
        }
    }
}
