import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
import { Scene } from "./Scene.js";
import { Item } from "./items/Item.js";

export class ItemSlot extends Entity {
    rect: Rect;
    item: Item;

    constructor(origin?: Vector2, size?: Vector2, speed?: number, color?: string, strokeColor?: string, alpha?: number, isScreenSpace?: boolean, doFill?: boolean, doStroke?: boolean, renderOrder?: number) {
        super();

        this.rect = new Rect(origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, renderOrder);

        this.children.push(this.rect);
    }

    _update(scene): void {
        console.log(scene);
    }

    _render(ctx: CanvasRenderingContext2D, scene: Scene) {
        this.rect._render(ctx, scene);
    }
}