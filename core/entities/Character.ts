import { Scene } from "../Scene.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";

export class Character extends Entity {
    $circle: Circle;
    lastPosition: Vector2 = new Vector2();
    movementTarget: Vector2 = new Vector2();

    constructor(scene: Scene, origin: Vector2, radius: number, speed: number, color: string) {
        super(scene);

        this.$circle = new Circle(scene, origin, 16, 4, color, undefined, undefined, 10);

        this.children.push(this.$circle);
    }

    startMovement(direction: Vector2) {
        direction.normalize();

        this.$circle.$shape.acceleration = new Vector2(
            direction.x * this.$circle.$shape.speed, 
            direction.y * this.$circle.$shape.speed
        );

        this.movementTarget = this.#getVectorToMousePosition();
    }

    #move(): void {
        this.lastPosition = new Vector2(this.$circle.$shape.origin.x, this.$circle.$shape.origin.y);

        if (this.movementTarget.x < this.$circle.$shape.speed && this.movementTarget.x > -this.$circle.$shape.speed 
            && this.movementTarget.y < this.$circle.$shape.speed && this.movementTarget.y > -this.$circle.$shape.speed) {
            this.$circle.$shape.acceleration = new Vector2();
            // this.#decelerate();
        } else {
            this.#accelerate();
        }
    }

    _update(): void {
        super._update();

        this.#move();
        for (const child of this.scene.level.children) {
            const rect = <Rect>child;
            
            if (this.$circle.isCollidingWithARect(rect)) {
                this.$circle.$shape.acceleration = new Vector2();
                this.$circle.$shape.origin = new Vector2(this.lastPosition.x, this.lastPosition.y);
            }
        }
    }

    #accelerate() {
        this.$circle.$shape.origin.x += this.$circle.$shape.acceleration.x;
        this.$circle.$shape.origin.y += this.$circle.$shape.acceleration.y;

        this.movementTarget.x -= this.$circle.$shape.acceleration.x;
        this.movementTarget.y -= this.$circle.$shape.acceleration.y;
    }

    #decelerate() {
        this.$circle.$shape.acceleration.x -= this.$circle.$shape.acceleration.x * 0.05;
        this.$circle.$shape.acceleration.y -= this.$circle.$shape.acceleration.y * 0.05;

        this.movementTarget.x += this.$circle.$shape.acceleration.x * 0.01;
        this.movementTarget.y += this.$circle.$shape.acceleration.y * 0.01;
    }

    #getVectorToMousePosition(): Vector2 {
        return new Vector2(
            this.scene.input.mouse.worldOrigin.x - this.$circle.$shape.origin.x, 
            this.scene.input.mouse.worldOrigin.y - this.$circle.$shape.origin.y);
    }
}