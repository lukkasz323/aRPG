import { Vector2 } from "../utils/Vector2.js";
import { Physics } from "./Physics.js";
import { Text } from "./Text.js";
import { Entity } from "./Entity.js";

export class Label extends Entity {
    physics: Physics = new Physics();
    text: Text = new Text();

    constructor(origin: Vector2, value?: string, size?: number) {
        super();

        this.physics.origin = origin;
        this.text.value = value;
        if (size) { this.text.size = size; }
    }

    _render(ctx: CanvasRenderingContext2D) {
        super._render(ctx);

        ctx.fillStyle = this.physics.color;
        ctx.font = `${this.text.size}px ${this.text.font}`;
        ctx.fillText(this.text.value, this.physics.origin.x, this.physics.origin.y);
    }
}