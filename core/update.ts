import { Scene } from "./scene/scene.js";

export function updateGame(scene: Scene) {
    for (const entity of scene.entities) {
        entity.update();
    }
}