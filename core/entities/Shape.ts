import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";

export class Shape extends Entity {
    origin: Vector2 = new Vector2();
    acceleration: Vector2 = new Vector2();
    speed: number = 1;
    color: string = "white";
    alpha: number = 1;
    renderScreenSpace: boolean = false;

    constructor(origin?: Vector2, speed?: number, color?: string, alpha?: number, renderScreenSpace?: boolean, renderOrder?: number) {
        super();

        if (origin) { this.origin = origin; }
        if (speed) { this.speed = speed; }
        if (color) { this.color = color; }
        if (alpha) { this.alpha = alpha; }
        if (renderScreenSpace) { this.renderScreenSpace = renderScreenSpace; }
        if (renderOrder) { this.renderOrder = renderOrder; }
    }
}