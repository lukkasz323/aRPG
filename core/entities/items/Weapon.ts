import { Entity } from "../Entity.js";
import { Item } from "./Item.js";

export class Weapon extends Entity {
    item: Item = new Item();
}