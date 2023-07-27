import { Entity } from "./Entity.js";
import { Physics } from "./Physics.js";
export class Rect extends Entity {
    physics = new Physics();
    constructor(origin, size, color) {
        super();
        if (origin) {
            this.physics.origin = origin;
        }
        if (size) {
            this.physics.size = size;
        }
        if (color) {
            this.physics.color = color;
        }
    }
    _render(ctx) {
        this.physics._render(ctx);
    }
}
