import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Scene } from "../Scene.js";

export class Camera extends Entity {
    origin: Vector2 = new Vector2();
    offset: Vector2;

    constructor(scene: Scene, canvas: HTMLCanvasElement) {
        super(scene);

        this.offset = new Vector2(canvas.width / 2, canvas.height / 2);
    }

    _update(): void {
        this.origin.x = this.scene.player.$circle.$shape.origin.x - this.offset.x;
        this.origin.y = this.scene.player.$circle.$shape.origin.y - this.offset.y;
    }
}