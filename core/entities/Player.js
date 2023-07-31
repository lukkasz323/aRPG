import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
export class Player extends Entity {
    renderOrder = 1;
    rect = new Rect();
    constructor(origin) {
        super();
        this.rect.shape.origin = origin;
        this.rect.size.x = 32;
        this.rect.size.y = 32;
        this.rect.shape.color = "blue";
    }
    _update() { }
    _render(ctx, renderQueue) {
        this.rect._render(ctx);
    }
}
