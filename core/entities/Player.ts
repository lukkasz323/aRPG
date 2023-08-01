import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Scene } from "./Scene.js";
import { Rect } from "./Rect.js";
import { Character } from "./Character.js";

export class Player extends Entity {
    renderOrder: number = 10;
    circle: Circle = new Circle();
    character: Character = new Character();

    constructor(origin: Vector2) {
        super();

        this.circle.shape.origin = origin;

        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }

    _update(scene: Scene): void {
        let isMoveAllowed = true;

        for (const child of scene.level.children) {
            const rect = <Rect>child;

            if (this.circle.isCollidingWithARect(rect)) {
                isMoveAllowed = false;
                console.log(rect);
            }
        }

        if (isMoveAllowed) {
            this.move();
        }
    }

    move(): void {
        this.circle.shape.origin.x += this.circle.shape.acceleration.x * 5;
        this.circle.shape.origin.y += this.circle.shape.acceleration.y * 5;

        this.circle.shape.acceleration.x -= this.circle.shape.acceleration.x * 0.1;
        this.circle.shape.acceleration.y -= this.circle.shape.acceleration.y * 0.1;
    }

    _render(ctx: CanvasRenderingContext2D, renderQueue: Entity[]): void {
        this.circle._render(ctx);
    }
}