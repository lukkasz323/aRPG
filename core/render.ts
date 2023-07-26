import { Scene } from "./entities/Scene.js";

export function renderGame(scene: Scene, canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    renderBackground(ctx, canvas);
    
    scene._render(canvas);

    function renderBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function renderScene(ctx: CanvasRenderingContext2D, scene: Scene) {
        for (const entities of scene.children) {
            entities._render(ctx);
        }
    }
}