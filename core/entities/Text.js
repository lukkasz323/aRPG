import { Entity } from "./Entity.js";
export class Text extends Entity {
    value = "Text";
    size = 16;
    font = "Arial";
    constructor(scene, value, size) {
        super(scene);
        if (value) {
            this.value = value;
        }
        if (size) {
            this.size = size;
        }
    }
}
