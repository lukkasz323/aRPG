import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Item } from "./Item.js";
import { Rect } from "./Rect.js";

export class Inventory extends Entity {
    rightHand: Item;
    leftHand: Item;
    head: Item;
    chest: Item;
    amulet: Item;
    rightRing: Item;
    leftRing: Item;

    constructor(canvasSize: Vector2) {
        super();

        const size = new Vector2(256, 512);
        const offset = new Vector2(128, 0);

        this.children.push(
            new Rect(
                new Vector2(
                    offset.x + ((canvasSize.x / 2) - (size.x / 2)), 
                    offset.y + ((canvasSize.y / 2) - (size.y / 2))), 
                size, 
                "gray", 
                20));

        this.close();
    }

    open(): void {
        for (const child of this.children) {
            child.isEnabled = true;
        }
    }

    close(): void {
        for (const child of this.children) {
            child.isEnabled = false;
        }
    }
}