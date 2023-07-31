import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Shape } from "./Shape.js";

export class Circle extends Entity {
    shape: Shape = new Shape();
    radius: number;

    constructor(origin?: Vector2, radius?: number, color?: string) {
        super();

        if (origin) { this.shape.origin = origin; }
        if (radius) {this.radius = radius; }
        if (color) { this.shape.color = color; }
    }

    _render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.shape.origin.x, this.shape.origin.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = this.shape.color;
        ctx.fill();
    }
}