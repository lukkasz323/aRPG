import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Physics extends Entity {
    origin = new Vector2();
    size = new Vector2();
    color = "black";
    _render(ctx) {
        console.log(4);
        super._render(ctx);
        console.log(5);
        ctx.fillStyle = this.color;
        console.log(6);
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
        console.log(7);
    }
}
