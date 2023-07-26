export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    scene._render(canvas);
    function renderBackground(ctx, canvas) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function renderScene(ctx, scene) {
        for (const entities of scene.children) {
            entities._render(ctx);
        }
    }
}
