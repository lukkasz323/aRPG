import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
export class ItemSlot extends Entity {
    $rect;
    item = null;
    constructor(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, renderOrder) {
        super(scene);
        this.renderOrder = renderOrder;
        this.$rect = new Rect(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, undefined, undefined);
    }
    _render(ctx) {
        this.$rect._render(ctx);
        if (this.item) {
            this.item.item.uiIcon._render(ctx);
        }
    }
}
