import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
export class Inventory extends Entity {
    rightHand;
    leftHand;
    head;
    chest;
    amulet;
    rightRing;
    leftRing;
    constructor(canvasSize) {
        super();
        const size = new Vector2(256, 512);
        const offset = new Vector2(128, 0);
        this.children.push(new Rect(new Vector2(offset.x + ((canvasSize.x / 2) - (size.x / 2)), offset.y + ((canvasSize.y / 2) - (size.y / 2))), size, "gray", 20));
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
