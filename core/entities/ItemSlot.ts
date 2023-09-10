import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
import { Scene } from "../Scene.js";
import { Item } from "./items/Item.js";

export class ItemSlot extends Entity {
    rect: Rect;
    item_: Item = null;

    constructor(scene: Scene, origin?: Vector2, size?: Vector2, speed?: number, color?: string, strokeColor?: string, alpha?: number, isScreenSpace?: boolean, doFill?: boolean, doStroke?: boolean, renderOrder?: number) {
        super(scene);

        this.renderOrder = renderOrder;
        this.rect = new Rect(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, undefined, undefined);
    }

    _render(ctx: CanvasRenderingContext2D) {
        this.rect._render(ctx);
        if (this.item_) {
            this.item_.uiIcon._render(ctx);
        }
    }
}