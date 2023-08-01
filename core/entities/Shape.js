import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
export class Shape extends Entity {
    origin = new Vector2();
    acceleration = new Vector2();
    speed = 1;
    color = "black";
    alpha = 1;
}
