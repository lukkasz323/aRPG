import { Vector2 } from "../../utils/Vector2.js";
import { Physics } from "../components/Physics.js";
import { Entity } from "./Entity.js";

export class Rect extends Entity {
    physics: Physics = new Physics();

    constructor(origin: Vector2) {
        super();

        this.physics.origin = origin;

        this.physics.size = {x: 32, y: 32};
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.physics.render(ctx);
    }
}