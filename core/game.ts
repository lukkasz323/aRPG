import { Scene } from "./entities/Scene.js";

export class Game {
    scene: Scene = new Scene();
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    run() {
        const fps = 60;

        this.scene._render(this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        
        function gameLoop(scene: Scene, canvas: HTMLCanvasElement) {
            scene._update();
            scene._render(canvas);
        }
    }
}