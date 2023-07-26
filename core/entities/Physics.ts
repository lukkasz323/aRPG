import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";

export class Physics extends Entity {
    origin: Vector2 = new Vector2();
    size: Vector2 = new Vector2();
    color: string = "black";

    _render(ctx: CanvasRenderingContext2D): void {
        super._render(ctx);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}