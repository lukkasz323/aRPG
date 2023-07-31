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
        this.shape._render(ctx);
    }
}
