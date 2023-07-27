import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Physics } from "./Physics.js";

export class Rect extends Entity {
    physics: Physics = new Physics();

    constructor(origin?: Vector2, size?: Vector2, color?: string) {
        super();

        if (origin) { this.physics.origin = origin; }
        if (size) {this.physics.size = size; }
        if (color) { this.physics.color = color; }
    }

    _render(ctx: CanvasRenderingContext2D): void {
        this.physics._render(ctx);
    }
}