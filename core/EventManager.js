import { Vector2 } from "./utils/Vector2.js";
export class EventManager {
    addEvents(canvas, scene) {
        canvas.addEventListener("click", (event) => this.onClick(event, scene, canvas));
        canvas.addEventListener("mousemove", (event) => this.onMouseMove(event, scene, canvas));
    }
    onMouseMove(event, scene, canvas) {
        const canvasBoundingClientRect = canvas.getBoundingClientRect();
        scene.input.mouse.origin = new Vector2(Math.floor(event.x - canvasBoundingClientRect.x + 1), event.y - Math.floor(canvasBoundingClientRect.y));
    }
    onClick(event, scene, canvas) {
        const clickPosition = new Vector2(scene.input.mouse.origin.x, scene.input.mouse.origin.y);
        const playerShape = scene.player.circle.shape;
        const direction = new Vector2(clickPosition.x - playerShape.origin.x, clickPosition.y - playerShape.origin.y);
        direction.normalize();
        playerShape.acceleration = direction;
        console.log(playerShape.acceleration);
    }
}
