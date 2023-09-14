import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Scene } from "../Scene.js";
import { Character } from "./Character.js";
import { Inventory } from "./Inventory.js";

export class Player extends Entity {
    lastPosition: Vector2 = new Vector2();
    movementTarget: Vector2 = new Vector2();
    character: Character;
    inventory: Inventory;

    constructor(scene: Scene, origin: Vector2, canvas: HTMLCanvasElement) {
        super(scene);
        
        this.inventory = new Inventory(scene, canvas);
        this.character = new Character(scene, origin, 16, 4, "blue");

        this.children.push(this.inventory);
        this.children.push(this.character);

        scene.canvas.addEventListener("mousedown", (event: PointerEvent) => this.#onMouseDown(event));
        document.addEventListener("keydown", (event: KeyboardEvent) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event: KeyboardEvent) => this.#onKeyUp(event));
    }

    #getVectorToMousePosition(): Vector2 {
        return new Vector2(
            this.scene.input.mouse.worldOrigin.x - this.character.$circle.$shape.origin.x, 
            this.scene.input.mouse.worldOrigin.y - this.character.$circle.$shape.origin.y);
    }

    #onMouseDown(event: PointerEvent): void {
        this.character.startMovement(this.#getVectorToMousePosition());
    }

    #onKeyDown(event: KeyboardEvent) {
        if (event.code === "ShiftLeft") {
            this.inventory.open();
        }
    }

    #onKeyUp(event: KeyboardEvent) {
        if (event.code === "ShiftLeft") {
            this.inventory.close();
        }
    }
}