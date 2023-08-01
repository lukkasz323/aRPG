export class Vector2 {
    x: number
    y: number

    constructor(x?: number, y?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    normalize(): void {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
    
        if (magnitude === 0) {
            this.x = 0; // Avoid division by zero
            this.y = 0;
        } else {
            this.x = this.x / magnitude;
            this.y = this.y / magnitude;
        }
    }
}