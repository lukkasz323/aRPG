import { Scene } from "./entities/Scene.js";
export class Game {
    scene = new Scene();
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
    }
    run() {
        const fps = 60;
        this.scene._render(this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        function gameLoop(scene, canvas) {
            scene._update();
            scene._render(canvas);
        }
    }
}
