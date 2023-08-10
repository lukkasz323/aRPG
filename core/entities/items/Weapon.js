import { Entity } from "../Entity.js";
import { Item } from "./Item.js";
export class Weapon extends Entity {
    item;
    constructor(scene) {
        super(scene);
        this.item = new Item(scene);
    }
}
