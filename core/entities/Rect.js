import { Entity } from "./Entity.js";
import { Physics } from "./Physics.js";
export class Rect extends Entity {
    physics = new Physics();
    constructor(origin, size) {
        super();
        this.physics.origin = origin;
        this.physics.size = size;
    }
    _render(ctx) {
        console.log(1);
        super._render(ctx);
        console.log(2);
        this.physics._render(ctx);
        console.log(3);
    }
}
