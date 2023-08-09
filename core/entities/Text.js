import { Entity } from "./Entity.js";
export class Text extends Entity {
    value = "Text";
    size = 16;
    font = "Arial";
    constructor(value, size) {
        super();
        if (value) {
            this.value = value;
        }
        if (size) {
            this.size = size;
        }
    }
}
