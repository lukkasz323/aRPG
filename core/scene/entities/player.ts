import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";

export class Player extends Entity {
    physics: Physics = new Physics();

    constructor() {
        super();

        this.physics.size.x = 32;
        this.physics.size.y = 32;
    }

    update(): void {

    }

    render(ctx: CanvasRenderingContext2D): void {
        this.physics.render(ctx);
    }
}