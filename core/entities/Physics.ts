import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";

export class Physics extends Entity {
    origin: Vector2 = new Vector2();
    size: Vector2 = new Vector2();
    color: string = "black";

    _render(ctx: CanvasRenderingContext2D): void {
        console.log(4);
        super._render(ctx);

        console.log(5);
        ctx.fillStyle = this.color;
        console.log(6);
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
        console.log(7);
    }
}