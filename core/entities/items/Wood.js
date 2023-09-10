import { Entity } from "../Entity.js";
import { Item } from "./Item.js";
export class Wood extends Entity {
    $item;
    constructor(scene, iconOrigin) {
        super(scene);
        this.$item = new Item(this.scene, iconOrigin, "wood");
    }
}
