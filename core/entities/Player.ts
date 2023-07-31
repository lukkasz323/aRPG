import { Shape } from "./Shape.js";
import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Rect } from "./Rect.js";

export class Player extends Entity {
    renderOrder: number = 1;
    rect: Rect = new Rect();

    constructor(origin: Vector2) {
        super();

        this.rect.shape.origin = origin;

        this.rect.size.x = 32;
        this.rect.size.y = 32;
        this.rect.shape.color = "blue";
    }

    _update(): void {}

    _render(ctx: CanvasRenderingContext2D, renderQueue: Entity[]): void {
        this.rect._render(ctx);
    }
}