import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";

export class Player extends Entity {
    renderOrder: number = 1;
    circle: Circle = new Circle();

    constructor(origin: Vector2) {
        super();

        this.circle.shape.origin = origin;

        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }

    _update(): void {}

    _render(ctx: CanvasRenderingContext2D, renderQueue: Entity[]): void {
        this.circle._render(ctx);
    }
}