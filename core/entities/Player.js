import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Character } from "./Character.js";
import { Inventory } from "./Inventory.js";
export class Player extends Entity {
    lastPosition = new Vector2();
    movementTarget = new Vector2();
    character;
    inventory;
    constructor(scene, origin, canvas) {
        super(scene);
        this.inventory = new Inventory(scene, canvas);
        this.character = new Character(scene, origin, 16, 4, "blue");
        this.children.push(this.inventory);
        this.children.push(this.character);
        scene.canvas.addEventListener("mousedown", (event) => this.#onMouseDown(event));
        document.addEventListener("keydown", (event) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event) => this.#onKeyUp(event));
    }
    #getVectorToMousePosition() {
        return new Vector2(this.scene.input.mouse.worldOrigin.x - this.character.$circle.$shape.origin.x, this.scene.input.mouse.worldOrigin.y - this.character.$circle.$shape.origin.y);
    }
    #onMouseDown(event) {
        this.character.startMovement(this.#getVectorToMousePosition());
    }
    #onKeyDown(event) {
        if (event.code === "ShiftLeft") {
            this.inventory.open();
        }
    }
    #onKeyUp(event) {
        if (event.code === "ShiftLeft") {
            this.inventory.close();
        }
    }
}
