import { Scene } from "../Scene.js";
import { Vector2 } from "../utils/Vector2.js";
import { Circle } from "./Circle.js";
import { Entity } from "./Entity.js";

export class Character extends Entity {
    $circle: Circle;

    constructor(scene: Scene, origin: Vector2, radius: number, speed: number, color: string) {
        super(scene);

        this.$circle = new Circle(scene, origin, 16, 4, color, undefined, undefined, 10);
    }
}