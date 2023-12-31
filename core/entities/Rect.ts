import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";
import { Scene } from "../Scene.js";
import { Shape } from "./Shape.js";

export class Rect extends Entity {
    $shape: Shape;
    size: Vector2 = new Vector2();
    strokeColor: string = "black";
    doFill: boolean = true;
    doStroke: boolean = true;
    texture: HTMLImageElement = null;

    constructor(scene: Scene, origin?: Vector2, size?: Vector2, speed?: number, color?: string, strokeColor?: string, alpha?: number, isScreenSpace?: boolean, doFill?: boolean, doStroke?: boolean, textureName?: string, renderOrder?: number) {
        super(scene);

        this.$shape = new Shape(scene, origin, speed, color, alpha, isScreenSpace, renderOrder);

        if (size) { this.size = size; }
        if (strokeColor) { this.strokeColor = strokeColor; }
        if (doFill !== undefined) { this.doFill = doFill; }
        if (doStroke !== undefined) { this.doStroke = doStroke; }
        if (renderOrder) { this.renderOrder = renderOrder; }

        this.texture = new Image();
        if (textureName) {
            this.texture.src = `../data/textures/${textureName}.png`;
        }
    }

    _render(ctx: CanvasRenderingContext2D): void {
        ctx.globalAlpha = this.$shape.alpha;
        if (this.doFill) {
            ctx.fillStyle = this.$shape.color;
            if (this.$shape.isScreenSpace) {
                ctx.fillRect(this.$shape.origin.x, this.$shape.origin.y, this.size.x, this.size.y);
            } else {
                ctx.fillRect(this.$shape.origin.x - this.scene.camera.origin.x, this.$shape.origin.y - this.scene.camera.origin.y,this.size.x, this.size.y);
            }
        }
        if (this.doStroke) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.strokeColor;
            if (this.$shape.isScreenSpace) {
                ctx.strokeRect(this.$shape.origin.x, this.$shape.origin.y, this.size.x, this.size.y);
            } else {
                ctx.strokeRect(this.$shape.origin.x - this.scene.camera.origin.x, this.$shape.origin.y - this.scene.camera.origin.y,this.size.x, this.size.y);
            }
        }
        if (this.texture) {
            if (this.$shape.isScreenSpace) {
                ctx.drawImage(this.texture, this.$shape.origin.x, this.$shape.origin.y);
            }
            else {
                ctx.drawImage(this.texture, this.$shape.origin.x - this.scene.camera.origin.x, this.$shape.origin.y - this.scene.camera.origin.y);
            }
        }
    }

    isCollidingWithPoint(point: Vector2): boolean {
        const rectRight = this.$shape.origin.x + this.size.x;
        const rectBottom = this.$shape.origin.y + this.size.y;
        
        return (
            point.x >= this.$shape.origin.x && point.x <= rectRight &&
            point.y >= this.$shape.origin.y && point.y <= rectBottom
        );
    }

    isCollidingWithCircle(circle: Circle): boolean {
        const distX = Math.abs(circle.$shape.origin.x - this.$shape.origin.x - this.size.x / 2);
        const distY = Math.abs(circle.$shape.origin.y - this.$shape.origin.y - this.size.y / 2);
    
        if (distX > (this.$shape.origin.x / 2 + circle.radius)) { return false; }
        if (distY > (this.$shape.origin.y / 2 + circle.radius)) { return false; }

        if (distX <= (this.$shape.origin.x / 2)) { return true; } 
        if (distY <= (this.$shape.origin.y / 2)) { return true; }
    
        const dx = distX - this.$shape.origin.x / 2;
        const dy = distY - this.$shape.origin.y / 2;
        return (dx * dx + dy * dy) <= (circle.radius * circle.radius);
    }
}