import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";
export class Character extends Entity {
    $circle;
    constructor(scene, origin, radius, speed, color) {
        super(scene);
        this.$circle = new Circle(scene, origin, 16, 4, color, undefined, undefined, 10);
    }
}
