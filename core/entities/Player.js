import { Entity } from "./Entity.js";
import { Circle } from "./Circle.js";
import { Character } from "./Character.js";
export class Player extends Entity {
    renderOrder = 10;
    circle = new Circle();
    character = new Character();
    constructor(origin) {
        super();
        this.circle.shape.origin = origin;
        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }
    _update(scene) {
        let isMoveAllowed = true;
        for (const child of scene.level.children) {
            const rect = child;
            if (this.circle.isCollidingWithARect(rect)) {
                isMoveAllowed = false;
                console.log(rect);
            }
        }
        if (isMoveAllowed) {
            this.move();
        }
    }
    move() {
        this.circle.shape.origin.x += this.circle.shape.acceleration.x * 5;
        this.circle.shape.origin.y += this.circle.shape.acceleration.y * 5;
        this.circle.shape.acceleration.x -= this.circle.shape.acceleration.x * 0.1;
        this.circle.shape.acceleration.y -= this.circle.shape.acceleration.y * 0.1;
    }
    _render(ctx, renderQueue) {
        this.circle._render(ctx);
    }
}
