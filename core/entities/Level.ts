import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";

export class Level extends Entity {
    data: string;

    constructor() {
        super();

        const offset = new Vector2(16, 16);
        const cellSize = 32;
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                this.children.push(new Rect(new Vector2(offset.x + (x * cellSize), offset.y + (y * cellSize)), new Vector2(cellSize, cellSize)));
            }
        }
    }
}