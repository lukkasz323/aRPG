import { Scene } from "./scene/Scene.js";

export function renderGame(scene: Scene, canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    renderBackground(ctx, canvas);
    renderScene(ctx, scene);

    function renderBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function renderScene(ctx: CanvasRenderingContext2D, scene: Scene) {
        for (const entities of scene.entities) {
            entities.render(ctx);
        }
    }
}