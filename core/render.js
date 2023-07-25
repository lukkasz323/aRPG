export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderScene(ctx, scene);
    function renderBackground(ctx, canvas) {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function renderScene(ctx, scene) {
        for (const entities of scene.entities) {
            entities.render(ctx);
        }
    }
}
