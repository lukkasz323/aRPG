import { Entity } from "../Entity.js";
import { Scene } from "../../Scene.js";
import { Item } from "./Item.js";

export class Weapon extends Entity {
    item: Item;

    constructor(scene: Scene) {
        super(scene);

        this.item = new Item(scene);
    }
}