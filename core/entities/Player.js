import { Entity } from "./Entity.js";
import { Circle } from "./Circle.js";
export class Player extends Entity {
    renderOrder = 1;
    circle = new Circle();
    constructor(origin) {
        super();
        this.circle.shape.origin = origin;
        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }
    _update() { }
    _render(ctx, renderQueue) {
        this.circle._render(ctx);
    }
}
