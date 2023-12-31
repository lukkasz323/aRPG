import { Entity } from "./Entity.js";
import { Shape } from "./Shape.js";
export class Circle extends Entity {
    $shape;
    radius = 1;
    constructor(scene, origin, radius, speed, color, alpha, isScreenSpace, renderOrder) {
        super(scene);
        this.$shape = new Shape(scene, origin, speed, color, alpha, isScreenSpace, renderOrder);
        if (radius) {
            this.radius = radius;
        }
    }
    _render(ctx) {
        ctx.beginPath();
        ctx.arc(this.$shape.origin.x - this.scene.camera.origin.x, this.$shape.origin.y - this.scene.camera.origin.y, this.radius, 0, 2 * Math.PI);
        ctx.globalAlpha = this.$shape.alpha;
        ctx.fillStyle = this.$shape.color;
        ctx.fill();
    }
    isCollidingWithARect(rect) {
        // Calculate the center of the rectangle
        const rectCenterX = rect.$shape.origin.x + rect.size.x / 2;
        const rectCenterY = rect.$shape.origin.y + rect.size.y / 2;
        // Calculate the distance between the center of the circle and the closest point on the rectangle
        const dx = Math.abs(this.$shape.origin.x - rectCenterX);
        const dy = Math.abs(this.$shape.origin.y - rectCenterY);
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
