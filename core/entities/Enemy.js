import { Entity } from "./Entity.js";
import { Character } from "./Character.js";
export class Enemy extends Entity {
    character;
    constructor(scene, origin, canvas) {
        super(scene);
        this.character = new Character(scene, origin, 16, 4, "red");
        this.children.push(this.character.$circle);
    }
}
