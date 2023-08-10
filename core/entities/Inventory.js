import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { ItemSlot } from "./ItemSlot.js";
import { Rect } from "./Rect.js";
export class Inventory extends Entity {
    backpack = [];
    backpackSize = new Vector2(8, 4);
    rightHand;
    head;
    chest;
    constructor(scene, canvas) {
        super(scene);
        const size = new Vector2(272, 512);
        const offset = new Vector2(176, 0);
        const origin = new Vector2(offset.x + ((canvas.width / 2) - (size.x / 2)), offset.y + ((canvas.height / 2) - (size.y / 2)));
        const alpha = 0.9;
        const isScreenSpace = true;
        const uiBackground = new Rect(scene, origin, size, undefined, undefined, undefined, alpha, isScreenSpace, true, true, 20);
        const uiRightHand = new Rect(scene, new Vector2(16 + origin.x, 32 + origin.y), new Vector2(64, 64), undefined, undefined, undefined, alpha, isScreenSpace, false, true, 21);
        const uiLeftHandBorder = new Rect(scene, new Vector2(-80 + size.x + origin.x, 32 + origin.y), new Vector2(64, 64), undefined, undefined, undefined, alpha, isScreenSpace, false, true, 21);
        this.children.push(uiBackground);
        this.children.push(uiRightHand);
        this.children.push(uiLeftHandBorder);
        const backpackCellSize = 32;
        const backpackOrigin = new Vector2(origin.x + 8, origin.y + (size.y - 8) - (this.backpackSize.y * backpackCellSize));
        for (let y = 0; y < this.backpackSize.y; y++) {
            for (let x = 0; x < this.backpackSize.x; x++) {
                this.children.push(new ItemSlot(scene, new Vector2(backpackOrigin.x + (x * backpackCellSize), backpackOrigin.y + (y * backpackCellSize)), new Vector2(backpackCellSize, backpackCellSize), undefined, undefined, undefined, alpha, isScreenSpace, false, true, 21));
            }
        }
        this.close();
    }
    open() {
        for (const child of this.children) {
            child.isEnabled = true;
        }
    }
    close() {
        for (const child of this.children) {
            child.isEnabled = false;
        }
    }
}
