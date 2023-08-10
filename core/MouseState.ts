import { Scene } from "./Scene.js";
import { Vector2 } from "./utils/Vector2.js";

export class MouseState {
    screenOrigin: Vector2 = new Vector2();
    worldOrigin: Vector2 = new Vector2();

    constructor(public scene: Scene) {
        scene.canvas.addEventListener("mousemove", (event: PointerEvent) => this.#onMouseMove(event));
    }

    #onMouseMove(event: PointerEvent): void {
        const canvasBoundingClientRect: DOMRect = this.scene.canvas.getBoundingClientRect();

        this.screenOrigin = new Vector2(
            Math.floor(event.x - canvasBoundingClientRect.x + 1), 
            event.y - Math.floor(canvasBoundingClientRect.y)
        );

        this.worldOrigin = new Vector2(this.screenOrigin.x + this.scene.camera.origin.x, this.screenOrigin.y + this.scene.camera.origin.y);
    }
}