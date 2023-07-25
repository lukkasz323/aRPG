import { Physics } from "../components/physics.js";
import { Entity } from "./entity.js";

export class Player extends Entity {
    physics: Physics = new Physics();

    constructor() {
        super();

        this.physics.size.x = 32;
        this.physics.size.y = 64;
    }

    update(): void {

    }

    render(ctx: CanvasRenderingContext2D): void {
        this.physics.render(ctx);
    }
}