import { Physics } from "../components/Physics.js";
import { Text } from "../components/Text.js";
import { Entity } from "./Entity.js";
export class Label extends Entity {
    physics = new Physics();
    text = new Text();
    constructor() {
        super();
        this.physics.color = "#000";
    }
    render(ctx) {
        ctx.fillStyle = this.physics.color;
        ctx.font = `${this.text.size}px ${this.text.font}`;
        ctx.fillText(this.text.value, this.physics.origin.x, this.physics.origin.y);
        console.log(ctx);
    }
}
