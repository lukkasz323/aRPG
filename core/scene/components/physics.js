import { Vector2 } from "../../utils/Vector2.js";
import { Component } from "./Component.js";
export class Physics extends Component {
    origin = new Vector2();
    size = new Vector2();
    color = "#FFF";
    constructor() {
        super();
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
    }
}
