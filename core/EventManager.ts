import { Item } from "./entities/items/Item.js";
import { Scene } from "./entities/Scene.js";
import { Vector2 } from "./utils/Vector2.js";

export class EventManager {
    addEvents(canvas: HTMLCanvasElement, scene: Scene): void {
        canvas.addEventListener("click", (event: PointerEvent) => this.onClick(event, scene, canvas));
        canvas.addEventListener("mousemove", (event: PointerEvent) => this.onMouseMove(event, scene, canvas));
        document.addEventListener("keydown", (event: KeyboardEvent) => this.onKeyDown(event, scene));
        document.addEventListener("keyup", (event: KeyboardEvent) => this.onKeyUp(event, scene));
    }

    onMouseMove(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
        const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

        scene.input.mouse.origin = new Vector2(
            Math.floor(event.x - canvasBoundingClientRect.x + 1), 
            event.y - Math.floor(canvasBoundingClientRect.y)
        );
    }

    onClick(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
        scene.player.startMovement(scene);
    }
    
    onKeyDown(event: KeyboardEvent, scene: Scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.open();
        }
        console.log(Item.generate()); // Debug
    }
    
    onKeyUp(event: KeyboardEvent, scene: Scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.close();
        }
    }
}