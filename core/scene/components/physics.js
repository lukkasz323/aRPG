import { Vector2 } from "../../utils/vector2.js";
import { Component } from "./component.js";
export class Physics extends Component {
    origin = new Vector2();
    size = new Vector2();
    color = "#FFF";
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}
