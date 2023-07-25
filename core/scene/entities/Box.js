import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";
export class Box extends Entity {
    physics = new Physics();
    render(ctx) {
        this.physics.render(ctx);
    }
}
