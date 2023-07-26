export function updateGame(scene) {
    for (const entity of scene.children) {
        entity.update();
    }
}
