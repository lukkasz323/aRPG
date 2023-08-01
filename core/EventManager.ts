import { Scene } from "./entities/Scene.js";
import { Vector2 } from "./utils/Vector2.js";

export class EventManager {
    addEvents(canvas: HTMLCanvasElement, scene: Scene): void {
        canvas.addEventListener("click", (event: PointerEvent) => this.onClick(event, scene, canvas));
        canvas.addEventListener("mousemove", (event: PointerEvent) => this.onMouseMove(event, scene, canvas));
    }

    onMouseMove(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
        const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();

        scene.input.mouse.origin = new Vector2(
            Math.floor(event.x - canvasBoundingClientRect.x + 1), 
            event.y - Math.floor(canvasBoundingClientRect.y)
        );
    }

    onClick(event: PointerEvent, scene: Scene, canvas: HTMLCanvasElement): void {
        const clickPosition: Vector2 = new Vector2(scene.input.mouse.origin.x, scene.input.mouse.origin.y);
        
        const playerShape = scene.player.circle.shape;
        const direction = new Vector2(clickPosition.x - playerShape.origin.x, clickPosition.y - playerShape.origin.y);
        direction.normalize();
        playerShape.acceleration = direction;
        console.log(playerShape.acceleration);
    }
}