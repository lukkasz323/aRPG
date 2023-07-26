import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Physics extends Entity {
    origin = new Vector2();
    size = new Vector2();
    color = "black";
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}
