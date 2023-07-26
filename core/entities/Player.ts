import { Physics } from "./Physics.js";
import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";

export class Player extends Entity {
    renderOrder: number = 1;
    physics: Physics = new Physics();

    constructor(origin: Vector2) {
        super();

        this.physics.origin = origin;

        this.physics.size.x = 32;
        this.physics.size.y = 32;
        this.physics.color = "blue";
    }

    _update(): void {}

    _render(ctx: CanvasRenderingContext2D, renderQueue: Entity[]): void {
        this.physics._render(ctx);
    }
}