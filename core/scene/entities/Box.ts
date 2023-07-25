import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";

export class Box extends Entity {
    physics: Physics = new Physics();

    render(ctx: CanvasRenderingContext2D): void {
        this.physics.render(ctx);
    }
}