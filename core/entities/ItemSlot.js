import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
export class ItemSlot extends Entity {
    rect;
    item;
    constructor(origin, size, speed, color, strokeColor, alpha, renderScreenSpace, renderFill, renderStroke, renderOrder) {
        super();
        this.rect = new Rect(origin, size, speed, color, strokeColor, alpha, renderScreenSpace, renderFill, renderStroke, renderOrder);
        this.children.push(this.rect);
    }
    _update(scene) {
        console.log(scene);
    }
    _render(ctx, scene) {
        this.rect._render(ctx, scene);
    }
}
