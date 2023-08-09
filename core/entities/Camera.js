import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Camera extends Entity {
    origin = new Vector2();
    offset;
    constructor(canvas) {
        super();
        this.offset = new Vector2(canvas.width / 2, canvas.height / 2);
    }
    _update(scene) {
        this.origin.x = scene.player.circle.shape.origin.x - this.offset.x;
        this.origin.y = scene.player.circle.shape.origin.y - this.offset.y;
    }
}
