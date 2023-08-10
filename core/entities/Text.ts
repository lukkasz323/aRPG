import { Entity } from "./Entity.js";
import { Scene } from "../Scene.js";

export class Text extends Entity {
    value: string = "Text";
    size: number = 16;
    font: string = "Arial";

    constructor(scene: Scene, value?: string, size?: number) {
        super(scene);

        if (value) { this.value = value; }
        if (size) { this.size = size; }
    }
}