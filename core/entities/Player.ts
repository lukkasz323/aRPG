import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Scene } from "../Scene.js";
import { Rect } from "./Rect.js";
import { Character } from "./Character.js";
import { Inventory } from "./Inventory.js";

export class Player extends Entity {
    circle: Circle;
    lastPosition: Vector2 = new Vector2();
    movementTarget: Vector2 = new Vector2();
    character: Character;
    inventory: Inventory;

    constructor(scene: Scene, origin: Vector2, canvas: HTMLCanvasElement) {
        super(scene);

        this.circle = new Circle(scene, origin, 16, 4, "blue", undefined, undefined, 10);
        this.inventory = new Inventory(scene, canvas);
        this.character = new Character(scene);

        this.children.push(this.inventory);
        this.children.push(this.circle);

        scene.canvas.addEventListener("mousedown", (event: PointerEvent) => this.#onMouseDown(event));
        document.addEventListener("keydown", (event: KeyboardEvent) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event: KeyboardEvent) => this.#onKeyUp(event));
    }

    _update(): void {
        super._update();

        this.#move();
        for (const child of this.scene.level.children) {
            const rect = <Rect>child;
            
            if (this.circle.isCollidingWithARect(rect)) {
                this.circle.shape.acceleration = new Vector2();
                this.circle.shape.origin = new Vector2(this.lastPosition.x, this.lastPosition.y);
            }
        }
    }

    startMovement() {
        const direction = this.#getVectorToMousePosition();
        direction.normalize();

        this.scene.player.circle.shape.acceleration = new Vector2(
            direction.x * this.scene.player.circle.shape.speed, 
            direction.y * this.scene.player.circle.shape.speed
        );

        this.movementTarget = this.#getVectorToMousePosition();
    }

    #move(): void {
        this.lastPosition = new Vector2(this.circle.shape.origin.x, this.circle.shape.origin.y);

        if (this.movementTarget.x < this.circle.shape.speed && this.movementTarget.x > -this.circle.shape.speed 
            && this.movementTarget.y < this.circle.shape.speed && this.movementTarget.y > -this.circle.shape.speed) {
            this.circle.shape.acceleration = new Vector2();
            // this.#decelerate();
        } else {
            this.#accelerate();
        }
    }

    #accelerate() {
        this.circle.shape.origin.x += this.circle.shape.acceleration.x;
        this.circle.shape.origin.y += this.circle.shape.acceleration.y;

        this.movementTarget.x -= this.circle.shape.acceleration.x;
        this.movementTarget.y -= this.circle.shape.acceleration.y;
    }

    #decelerate() {
        this.circle.shape.acceleration.x -= this.circle.shape.acceleration.x * 0.05;
        this.circle.shape.acceleration.y -= this.circle.shape.acceleration.y * 0.05;

        this.movementTarget.x += this.circle.shape.acceleration.x * 0.01;
        this.movementTarget.y += this.circle.shape.acceleration.y * 0.01;
    }

    #getVectorToMousePosition(): Vector2 {
        return new Vector2(
            this.scene.input.mouse.worldOrigin.x - this.circle.shape.origin.x, 
            this.scene.input.mouse.worldOrigin.y - this.circle.shape.origin.y);
    }

    #onMouseDown(event: PointerEvent): void {
        this.startMovement();
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