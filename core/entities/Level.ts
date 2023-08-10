import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
import { Scene } from "../Scene.js";

export class Level extends Entity {
    constructor(scene: Scene, levelData: string) {
        super(scene);

        const splitLevelData = levelData.split(/\r\n|\r|\n/);
        const offset = new Vector2(0, 0);
        const cellSize = 32;
        for (let y = 0; y < splitLevelData.length; y++) {
            for (let x = 0; x < splitLevelData[y].length; x++) {
                const char: string = splitLevelData[y][x];
                if (char !== "0") {
                    this.children.push(
                        new Rect(scene, 
                            new Vector2(offset.x + (x * cellSize), offset.y + (y * cellSize)),
                            new Vector2(cellSize, cellSize)
                            ));
                }
            }
        }
    }
}