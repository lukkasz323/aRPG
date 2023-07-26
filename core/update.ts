import { Scene } from "./entities/Scene.js";

export function updateGame(scene: Scene) {
    for (const entity of scene.children) {
        entity.update();
    }
}