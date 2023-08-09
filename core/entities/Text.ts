import { Entity } from "./Entity.js";

export class Text extends Entity {
    value: string = "Text";
    size: number = 16;
    font: string = "Arial";

    constructor(value?: string, size?: number) {
        super();

        if (value) { this.value = value; }
        if (size) { this.size = size; }
    }
}