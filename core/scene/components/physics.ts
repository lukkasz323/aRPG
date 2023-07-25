import { Vector2 } from "../../utils/Vector2.js";
import { Component } from "./Component.js";

export class Physics extends Component {
    origin: Vector2 = new Vector2();
    size: Vector2 = new Vector2();
    color: string = "#FFF";

    constructor() {
        super();
    }

    render(ctx): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}