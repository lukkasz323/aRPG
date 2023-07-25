export function updateGame(scene) {
    for (const entity of scene.entities) {
        entity.update();
    }
}
