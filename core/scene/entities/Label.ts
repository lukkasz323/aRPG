import { Vector2 } from "../../utils/Vector2.js";
import { Physics } from "../components/Physics.js";
import { Text } from "../components/Text.js";
import { Entity } from "./Entity.js";

export class Label extends Entity {
    physics: Physics = new Physics();
    text: Text = new Text();

    constructor(origin: Vector2, value: string) {
        super();

        this.physics.origin = origin;
        this.text.value = value;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.physics.color;
        ctx.font = `${this.text.size}px ${this.text.font}`;
        ctx.fillText(this.text.value, this.physics.origin.x, this.physics.origin.y);
    }
}