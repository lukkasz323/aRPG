import { Physics } from "../components/physics.js";
import { Entity } from "./entity.js";
export class Player extends Entity {
    physics = new Physics();
    constructor() {
        super();
        this.physics.size.x = 32;
        this.physics.size.y = 64;
    }
    update() {
    }
    render(ctx) {
        this.physics.render(ctx);
    }
}
