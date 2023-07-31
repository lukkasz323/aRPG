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
        this.shape._render(ctx);
    }
}