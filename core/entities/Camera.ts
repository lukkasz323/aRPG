import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Scene } from "./Scene.js";

export class Camera extends Entity {
    origin: Vector2 = new Vector2();
    offset: Vector2;

    constructor(canvas: HTMLCanvasElement) {
        super();

        this.offset = new Vector2(canvas.width / 2, canvas.height / 2);
    }

    _update(scene: Scene): void {
        this.origin.x = scene.player.circle.shape.origin.x - this.offset.x;
        this.origin.y = scene.player.circle.shape.origin.y - this.offset.y;
    }
}