import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";
import { Shape } from "./Shape.js";

export class Rect extends Entity {
    shape: Shape = new Shape();
    size: Vector2 = new Vector2();

    constructor(origin?: Vector2, size?: Vector2, color?: string, renderOrder?: number) {
        super();

        if (origin) { this.shape.origin = origin; }
        if (size) {this.size = size; }
        if (color) { this.shape.color = color; }
        if (renderOrder) { this.renderOrder = renderOrder; }
    }

    _render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.shape.color;
        ctx.fillRect(this.shape.origin.x, this.shape.origin.y, this.size.x, this.size.y);
    }

    isCollidingWithACircle(circle: Circle): boolean {
        const distX = Math.abs(circle.shape.origin.x - this.shape.origin.x - this.size.x / 2);
        const distY = Math.abs(circle.shape.origin.y - this.shape.origin.y - this.size.y / 2);
    
        if (distX > (this.shape.origin.x / 2 + circle.radius)) { return false; }
        if (distY > (this.shape.origin.y / 2 + circle.radius)) { return false; }

        if (distX <= (this.shape.origin.x / 2)) { return true; } 
        if (distY <= (this.shape.origin.y / 2)) { return true; }
    
        const dx = distX - this.shape.origin.x / 2;
        const dy = distY - this.shape.origin.y / 2;
        return (dx * dx + dy * dy) <= (circle.radius * circle.radius);
    }
}