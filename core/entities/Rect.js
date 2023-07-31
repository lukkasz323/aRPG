import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Shape } from "./Shape.js";
export class Rect extends Entity {
    shape = new Shape();
    size = new Vector2();
    constructor(origin, size, color) {
        super();
        if (origin) {
            this.shape.origin = origin;
        }
        if (size) {
            this.size = size;
        }
        if (color) {
            this.shape.color = color;
        }
    }
    _render(ctx) {
        ctx.fillStyle = this.shape.color;
        ctx.fillRect(this.shape.origin.x, this.shape.origin.y, this.size.x, this.size.y);
    }
    collidingWithACircle(circle) {
        const distX = Math.abs(circle.shape.origin.x - this.shape.origin.x - this.size.x / 2);
        const distY = Math.abs(circle.shape.origin.y - this.shape.origin.y - this.size.y / 2);
        if (distX > (this.shape.origin.x / 2 + circle.radius)) {
            return false;
        }
        if (distY > (this.shape.origin.y / 2 + circle.radius)) {
            return false;
        }
        if (distX <= (this.shape.origin.x / 2)) {
            return true;
        }
        if (distY <= (this.shape.origin.y / 2)) {
            return true;
        }
        var dx = distX - this.shape.origin.x / 2;
        var dy = distY - this.shape.origin.y / 2;
        return (dx * dx + dy * dy) <= (circle.radius * circle.radius);
    }
}
