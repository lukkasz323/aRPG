import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Shape extends Entity {
    origin = new Vector2();
    acceleration = new Vector2();
    speed = 1;
    color = "white";
    alpha = 1;
    isScreenSpace = false;
    constructor(origin, speed, color, alpha, isScreenSpace, renderOrder) {
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
        if (isScreenSpace) {
            this.isScreenSpace = isScreenSpace;
        }
        if (renderOrder) {
            this.renderOrder = renderOrder;
        }
    }
}
