import { Entity } from "./Entity.js";
import { Vector2 } from "../utils/Vector2.js";
import { Scene } from "../Scene.js";
import { Rect } from "./Rect.js";
import { Character } from "./Character.js";
import { Inventory } from "./Inventory.js";

export class Enemy extends Entity {
    character: Character;

    constructor(scene: Scene, origin: Vector2, canvas: HTMLCanvasElement) {
        super(scene);
        
        this.character = new Character(scene, origin, 16, 4, "red");

        this.children.push(this.character.$circle);
    }
}