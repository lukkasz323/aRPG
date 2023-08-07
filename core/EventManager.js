import { Item } from "./entities/items/Item.js";
import { Vector2 } from "./utils/Vector2.js";
export class EventManager {
    addEvents(canvas, scene) {
        canvas.addEventListener("click", (event) => this.onClick(event, scene, canvas));
        canvas.addEventListener("mousemove", (event) => this.onMouseMove(event, scene, canvas));
        document.addEventListener("keydown", (event) => this.onKeyDown(event, scene));
        document.addEventListener("keyup", (event) => this.onKeyUp(event, scene));
    }
    onMouseMove(event, scene, canvas) {
        const canvasBoundingClientRect = canvas.getBoundingClientRect();
        scene.input.mouse.origin = new Vector2(Math.floor(event.x - canvasBoundingClientRect.x + 1), event.y - Math.floor(canvasBoundingClientRect.y));
    }
    onClick(event, scene, canvas) {
        scene.player.startMovement(scene);
    }
    onKeyDown(event, scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.open();
        }
        console.log(Item.generate()); // Debug
    }
    onKeyUp(event, scene) {
        if (event.code === "ShiftLeft") {
            scene.player.inventory.close();
        }
    }
}
