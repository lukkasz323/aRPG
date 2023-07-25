import { renderGame } from "./render.js";
import { Scene } from "./scene/scene.js";
import { updateGame } from "./update.js";
export class Game {
    scene = new Scene();
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
    }
    run() {
        const fps = 60;
        renderGame(this.scene, this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        function gameLoop(scene, canvas) {
            updateGame(scene);
            renderGame(scene, canvas);
        }
    }
}
