import { Physics } from "./Physics.js";
import { Entity } from "./Entity.js";
export class Player extends Entity {
    physics = new Physics();
    constructor() {
        super();
        this.physics.size.x = 32;
        this.physics.size.y = 32;
        this.physics.color = "blue";
    }
    _update() { }
    _render(ctx) {
        super._render(ctx);
        this.physics._render(ctx);
    }
}
