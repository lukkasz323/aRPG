import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";

export class Shape extends Entity {
    origin: Vector2 = new Vector2();
    acceleration: Vector2 = new Vector2();
    speed: number = 1;
    color: string = "black";
}