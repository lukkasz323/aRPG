import { Item } from "./entities/items/Item.js";
import { Scene } from "./Scene.js";
import { MouseState } from "./MouseState.js";
import { Vector2 } from "./utils/Vector2.js";

export class EventManager {
    addEvents(canvas: HTMLCanvasElement, scene: Scene): void {
        canvas.addEventListener("mousemove", (event: PointerEvent) => this.onMouseMove(event, scene, canvas));
        // canvas.addEventListener("mousedown", (event: PointerEvent) => this.onMouseDown(event, scene, canvas));
        // canvas.addEventListener("mousedown", (event: PointerEvent) => this.onMouseDown.emit(event, scene, canvas));
        document.addEventListener("keydown", (event: KeyboardEvent) => this.onKeyDown(event, scene));
        document.addEventListener("keyup", (event: KeyboardEvent) => this.onKeyUp(event, scene));
    }

    onMouseMove(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
        const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();
        const mouse: MouseState = scene.input.mouse;

        mouse.screenOrigin = new Vector2(
            Math.floor(event.x - canvasBoundingClientRect.x + 1), 
            event.y - Math.floor(canvasBoundingClientRect.y)
        );

        mouse.worldOrigin = new Vector2(mouse.screenOrigin.x + scene.camera.origin.x, mouse.screenOrigin.y + scene.camera.origin.y);
    }

    // onMouseDown(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
    //     scene.player.startMovement(scene);
    // }

    onKeyDown(event: KeyboardEvent, scene: Scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.open();
        }
    }
    
    onKeyUp(event: KeyboardEvent, scene: Scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.close();
        }
    }
}