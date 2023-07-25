import { Scene } from "./scene/Scene.js";

export function updateGame(scene: Scene) {
    for (const entity of scene.entities) {
        entity.update();
    }
}