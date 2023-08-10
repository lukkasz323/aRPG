import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
import { Scene } from "../Scene.js";
import { Item } from "./items/Item.js";

export class ItemSlot extends Entity {
    rect: Rect;
    item: Item;

    constructor(scene: Scene, origin?: Vector2, size?: Vector2, speed?: number, color?: string, strokeColor?: string, alpha?: number, isScreenSpace?: boolean, doFill?: boolean, doStroke?: boolean, renderOrder?: number) {
        super(scene);

        this.rect = new Rect(scene, origin, size, speed, color, strokeColor, alpha, isScreenSpace, doFill, doStroke, renderOrder);

        this.children.push(this.rect);

        scene.canvas.addEventListener("mousedown", (event: PointerEvent) => this.onMouseDown(event));
    }

    onMouseDown(event: PointerEvent): void {
        console.log(this);
    }

    _render(ctx: CanvasRenderingContext2D) {
        this.rect._render(ctx);
    }
}