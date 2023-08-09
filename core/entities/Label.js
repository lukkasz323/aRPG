import { Shape } from "./Shape.js";
import { Text } from "./Text.js";
import { Entity } from "./Entity.js";
export class Label extends Entity {
    shape;
    text;
    constructor(origin, value, size) {
        super();
        this.shape = new Shape();
        this.text = new Text();
        if (origin) {
            this.shape.origin = origin;
        }
        if (value) {
            this.text.value = value;
        }
        if (size) {
            this.text.size = size;
        }
    }
    _render(ctx) {
        ctx.globalAlpha = this.shape.alpha;
        ctx.fillStyle = this.shape.color;
        ctx.font = `${this.text.size}px ${this.text.font}`;
        ctx.fillText(this.text.value, this.shape.origin.x, this.shape.origin.y);
    }
}
