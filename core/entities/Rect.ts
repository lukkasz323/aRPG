import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";
import { Scene } from "./Scene.js";
import { Shape } from "./Shape.js";

export class Rect extends Entity {
    shape: Shape;
    size: Vector2 = new Vector2();
    strokeColor: string = "black";
    renderFill: boolean = true;
    renderStroke: boolean = true;

    constructor(origin?: Vector2, size?: Vector2, speed?: number, color?: string, strokeColor?: string, alpha?: number, renderScreenSpace?: boolean, renderFill?: boolean, renderStroke?: boolean, renderOrder?: number) {
        super();

        this.shape = new Shape(origin, speed, color, alpha, renderScreenSpace, renderOrder);

        if (size) { this.size = size; }
        if (strokeColor) { this.strokeColor = strokeColor; }
        if (renderFill !== undefined) { this.renderFill = renderFill; }
        if (renderStroke !== undefined) { this.renderStroke = renderStroke; }
        if (renderOrder) { this.renderOrder = renderOrder; }
    }

    _render(ctx: CanvasRenderingContext2D, scene: Scene): void {
        ctx.globalAlpha = this.shape.alpha;
        if (this.renderFill) {
            ctx.fillStyle = this.shape.color;
            if (this.shape.renderScreenSpace) {
                ctx.fillRect(this.shape.origin.x, this.shape.origin.y, this.size.x, this.size.y);
            } else {
                ctx.fillRect(this.shape.origin.x - scene.camera.origin.x, this.shape.origin.y - scene.camera.origin.y,this.size.x, this.size.y);
            }
        }
        if (this.renderStroke) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.strokeColor;
            if (this.shape.renderScreenSpace) {
                ctx.strokeRect(this.shape.origin.x, this.shape.origin.y, this.size.x, this.size.y);
            } else {
                ctx.strokeRect(this.shape.origin.x - scene.camera.origin.x, this.shape.origin.y - scene.camera.origin.y,this.size.x, this.size.y);
            }
        }
    }

    isCollidingWithACircle(circle: Circle): boolean {
        const distX = Math.abs(circle.shape.origin.x - this.shape.origin.x - this.size.x / 2);
        const distY = Math.abs(circle.shape.origin.y - this.shape.origin.y - this.size.y / 2);
    
        if (distX > (this.shape.origin.x / 2 + circle.radius)) { return false; }
        if (distY > (this.shape.origin.y / 2 + circle.radius)) { return false; }

        if (distX <= (this.shape.origin.x / 2)) { return true; } 
        if (distY <= (this.shape.origin.y / 2)) { return true; }
    
        const dx = distX - this.shape.origin.x / 2;
        const dy = distY - this.shape.origin.y / 2;
        return (dx * dx + dy * dy) <= (circle.radius * circle.radius);
    }
}