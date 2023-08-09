import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Scene } from "./Scene.js";

export class Camera extends Entity {
    origin: Vector2 = new Vector2(-64, -32);

    _update(scene: Scene): void {
        this.origin.x = scene.player.circle.shape.origin.x - 320;
        this.origin.y = scene.player.circle.shape.origin.y - 320;
    }
}