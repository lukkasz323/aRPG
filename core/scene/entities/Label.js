import { Physics } from "../components/Physics.js";
import { Text } from "../components/Text.js";
import { Entity } from "./Entity.js";
export class Label extends Entity {
    physics = new Physics();
    text = new Text();
    constructor(origin, value) {
        super();
        this.physics.origin = origin;
        this.text.value = value;
    }
    render(ctx) {
        ctx.fillStyle = this.physics.color;
        ctx.font = `${this.text.size}px ${this.text.font}`;
        ctx.fillText(this.text.value, this.physics.origin.x, this.physics.origin.y);
    }
}
