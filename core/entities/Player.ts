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
    lastPosition: Vector2;

    constructor(origin: Vector2) {
        super();

        this.circle.shape.origin = origin;

        this.circle.radius = 16;
        this.circle.shape.color = "blue";
    }

    _update(scene: Scene): void {
        this.move();
        for (const child of scene.level.children) {
            const rect = <Rect>child;
            
            if (this.circle.isCollidingWithARect(rect)) {
                this.circle.shape.acceleration = new Vector2();
                this.circle.shape.origin = new Vector2(this.lastPosition.x, this.lastPosition.y);
            }
        }
    }

    move(): void {
        this.lastPosition = new Vector2(this.circle.shape.origin.x, this.circle.shape.origin.y);

        this.circle.shape.origin.x += this.circle.shape.acceleration.x * 5;
        this.circle.shape.origin.y += this.circle.shape.acceleration.y * 5;

        this.circle.shape.acceleration.x -= this.circle.shape.acceleration.x * 0.1;
        this.circle.shape.acceleration.y -= this.circle.shape.acceleration.y * 0.1;
    }

    _render(ctx: CanvasRenderingContext2D, renderQueue: Entity[]): void {
        this.circle._render(ctx);
    }
}