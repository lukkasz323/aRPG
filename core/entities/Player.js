import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Character } from "./Character.js";
import { Inventory } from "./Inventory.js";
export class Player extends Entity {
    circle;
    lastPosition = new Vector2();
    movementTarget = new Vector2();
    character = new Character();
    inventory;
    constructor(origin, canvas) {
        super();
        this.circle = new Circle(origin, 16, 4, "blue", undefined, undefined, 10);
        this.inventory = new Inventory(canvas);
        this.children.push(this.inventory);
        this.children.push(this.circle);
    }
    _update(scene) {
        this.#move();
        for (const child of scene.level.children) {
            const rect = child;
            if (this.circle.isCollidingWithARect(rect)) {
                this.circle.shape.acceleration = new Vector2();
                this.circle.shape.origin = new Vector2(this.lastPosition.x, this.lastPosition.y);
            }
        }
    }
    #move() {
        this.lastPosition = new Vector2(this.circle.shape.origin.x, this.circle.shape.origin.y);
        if (this.movementTarget.x < this.circle.shape.speed && this.movementTarget.x > -this.circle.shape.speed
            && this.movementTarget.y < this.circle.shape.speed && this.movementTarget.y > -this.circle.shape.speed) {
            this.circle.shape.acceleration = new Vector2();
            // this.#decelerate();
        }
        else {
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
    startMovement(scene) {
        const direction = this.#getVectorToMousePosition(scene);
        direction.normalize();
        scene.player.circle.shape.acceleration = new Vector2(direction.x * scene.player.circle.shape.speed, direction.y * scene.player.circle.shape.speed);
        this.movementTarget = this.#getVectorToMousePosition(scene);
    }
    #getVectorToMousePosition(scene) {
        return new Vector2(scene.input.mouse.worldOrigin.x - this.circle.shape.origin.x, scene.input.mouse.worldOrigin.y - this.circle.shape.origin.y);
    }
}
