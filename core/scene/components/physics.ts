import { Vector2 } from "../../utils/vector2.js";
import { Component } from "./component.js";

export class Physics extends Component {
    origin: Vector2 = new Vector2();
    size: Vector2 = new Vector2();
    color: string = "#FFF";

    render(ctx): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}