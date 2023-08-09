import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Shape extends Entity {
    origin = new Vector2();
    acceleration = new Vector2();
    speed = 1;
    color = "black";
    alpha = 1;
    renderScreenSpace = false;
    constructor(origin, speed, color, alpha, renderScreenSpace, renderOrder) {
        super();
        if (origin) {
            this.origin = origin;
        }
        if (speed) {
            this.speed = speed;
        }
        if (color) {
            this.color = color;
        }
        if (alpha) {
            this.alpha = alpha;
        }
        if (renderScreenSpace) {
            this.renderScreenSpace = renderScreenSpace;
        }
        if (renderOrder) {
            this.renderOrder = renderOrder;
        }
    }
}
