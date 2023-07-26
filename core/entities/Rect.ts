import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Physics } from "./Physics.js";

export class Rect extends Entity {
    physics: Physics = new Physics();

    constructor(origin: Vector2, size: Vector2) {
        super();

        this.physics.origin = origin;
        this.physics.size = size;
    }

    _render(ctx: CanvasRenderingContext2D): void {
        super._render(ctx);

        this.physics._render(ctx);
    }
}