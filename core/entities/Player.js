import { Physics } from "./Physics.js";
import { Entity } from "./Entity.js";
export class Player extends Entity {
    renderOrder = 1;
    physics = new Physics();
    constructor(origin) {
        super();
        this.physics.origin = origin;
        this.physics.size.x = 32;
        this.physics.size.y = 32;
        this.physics.color = "blue";
    }
    _update() { }
    _render(ctx, renderQueue) {
        this.physics._render(ctx);
    }
}
