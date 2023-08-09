import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Camera extends Entity {
    origin = new Vector2(-64, -32);
    _update(scene) {
        this.origin.x = scene.player.circle.shape.origin.x - 320;
        this.origin.y = scene.player.circle.shape.origin.y - 320;
    }
}
