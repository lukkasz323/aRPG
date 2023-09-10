import { Scene } from "../../Scene.js";
import { Vector2 } from "../../utils/Vector2.js";
import { Entity } from "../Entity.js";
import { Item } from "./Item.js";

export class Wood extends Entity{
    $item: Item;

    constructor(scene: Scene, iconOrigin: Vector2) {
        super(scene);

        this.$item = new Item(this.scene, iconOrigin, "wood");
    }
}