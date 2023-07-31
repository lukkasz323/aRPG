import { Entity } from "./Entity.js";
import { Shape } from "./Shape.js";
export class Circle extends Entity {
    shape = new Shape();
    radius;
    constructor(origin, radius, color) {
        super();
        if (origin) {
            this.shape.origin = origin;
        }
        if (radius) {
            this.radius = radius;
        }
        if (color) {
            this.shape.color = color;
        }
    }
    _render(ctx) {
        ctx.beginPath();
        ctx.arc(this.shape.origin.x, this.shape.origin.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.shape.color;
        ctx.fill();
    }
}
