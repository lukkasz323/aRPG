import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Rect } from "./Rect.js";
import { Scene } from "./Scene.js";
import { Shape } from "./Shape.js";

export class Circle extends Entity {
    shape: Shape;
    radius: number = 1;

    constructor(origin?: Vector2, radius?: number, speed?: number, color?: string, alpha?: number, isScreenSpace?: boolean, renderOrder?: number) {
        super();

        this.shape = new Shape(origin, speed, color, alpha, isScreenSpace, renderOrder);

        if (radius) { this.radius = radius; }
    }

    _render(ctx: CanvasRenderingContext2D, scene: Scene): void {
        ctx.beginPath();
        ctx.arc(this.shape.origin.x - scene.camera.origin.x, this.shape.origin.y - scene.camera.origin.y, this.radius, 0, 2 * Math.PI)
        ctx.globalAlpha = this.shape.alpha;
        ctx.fillStyle = this.shape.color;
        ctx.fill();
    }

    isCollidingWithARect(rect: Rect): boolean {
        // Calculate the center of the rectangle
        const rectCenterX = rect.shape.origin.x + rect.size.x / 2;
        const rectCenterY = rect.shape.origin.y + rect.size.y / 2;
      
        // Calculate the distance between the center of the circle and the closest point on the rectangle
        const dx = Math.abs(this.shape.origin.x - rectCenterX);
        const dy = Math.abs(this.shape.origin.y - rectCenterY);
      
        if (dx > rect.size.x / 2 + this.radius) {
          return false;
        }
        if (dy > rect.size.y / 2 + this.radius) {
          return false;
        }
      
        if (dx <= rect.size.x / 2) {
          return true;
        }
        if (dy <= rect.size.y / 2) {
          return true;
        }
      
        // Check collision with corners of the rectangle
        const cornerDistanceSq = (dx - rect.size.x / 2) ** 2 + (dy - rect.size.y / 2) ** 2;
        return cornerDistanceSq <= this.radius ** 2;
      }
}