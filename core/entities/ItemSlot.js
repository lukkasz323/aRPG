import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
export class ItemSlot extends Entity {
    rect;
    item;
    constructor(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, renderOrder) {
        super(scene);
        this.rect = new Rect(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, renderOrder);
        this.children.push(this.rect);
        scene.canvas.addEventListener("mousedown", (event) => this.onMouseDown(event));
    }
    onMouseDown(event) {
        console.log(this);
    }
    _render(ctx) {
        this.rect._render(ctx);
    }
}
