import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";
export class Player extends Entity {
    physics = new Physics();
    constructor() {
        super();
        this.physics.size.x = 32;
        this.physics.size.y = 32;
    }
    update() {
    }
    render(ctx) {
        this.physics.render(ctx);
    }
}
