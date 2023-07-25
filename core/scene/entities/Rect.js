import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";
export class Rect extends Entity {
    physics = new Physics();
    constructor(origin) {
        super();
        this.physics.origin = origin;
        this.physics.size = { x: 32, y: 32 };
    }
    render(ctx) {
        this.physics.render(ctx);
    }
}
