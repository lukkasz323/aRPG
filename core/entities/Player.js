import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Character } from "./Character.js";
export class Player extends Entity {
    renderOrder = 10;
    circle = new Circle();
    character = new Character();
    lastPosition;
    constructor(origin) {
        super();
        this.circle.shape.origin = origin;
        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }
    _update(scene) {
        this.move();
        for (const child of scene.level.children) {
            const rect = child;
            if (this.circle.isCollidingWithARect(rect)) {
                this.circle.shape.acceleration = new Vector2();
                this.circle.shape.origin = new Vector2(this.lastPosition.x, this.lastPosition.y);
            }
        }
    }
    move() {
        this.lastPosition = new Vector2(this.circle.shape.origin.x, this.circle.shape.origin.y);
        this.circle.shape.origin.x += this.circle.shape.acceleration.x * 5;
        this.circle.shape.origin.y += this.circle.shape.acceleration.y * 5;
        this.circle.shape.acceleration.x -= this.circle.shape.acceleration.x * 0.1;
        this.circle.shape.acceleration.y -= this.circle.shape.acceleration.y * 0.1;
    }
    _render(ctx, renderQueue) {
        this.circle._render(ctx);
    }
}
