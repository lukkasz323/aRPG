import { Vector2 } from "./utils/Vector2.js";
export class MouseState {
    scene;
    screenOrigin = new Vector2();
    worldOrigin = new Vector2();
    constructor(scene) {
        this.scene = scene;
        scene.canvas.addEventListener("mousemove", (event) => this.#onMouseMove(event));
    }
    #onMouseMove(event) {
        const canvasBoundingClientRect = this.scene.canvas.getBoundingClientRect();
        this.screenOrigin = new Vector2(Math.floor(event.x - canvasBoundingClientRect.x + 1), event.y - Math.floor(canvasBoundingClientRect.y));
        this.worldOrigin = new Vector2(this.screenOrigin.x + this.scene.camera.origin.x, this.screenOrigin.y + this.scene.camera.origin.y);
    }
}
