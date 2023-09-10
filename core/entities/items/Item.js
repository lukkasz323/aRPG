import { Entity } from "../Entity.js";
import { Rect } from "../Rect.js";
export class Item extends Entity {
    static iconSize;
    uiIcon;
    collision;
    constructor(scene, iconOrigin, textureName) {
        super(scene);
        this.uiIcon = new Rect(scene, iconOrigin, Item.iconSize, undefined, undefined, undefined, undefined, true, false, false, textureName, 30);
        // this.collision = new Circle(scene);
        this.children.push(this.uiIcon);
        // this.children.push(this.collision);
    }
    static generate(scene) {
        const item = new Item(scene);
        const rng = Math.random();
        // if (rng <= 0.001) {
        //     item.rarity = "Rare";
        // } else if (rng <= 0.01) {
        //     item.rarity = "Magic";
        // } else if (rng <= 0.1) {
        //     item.rarity = "Normal";
        // } else {
        //     item.rarity = "NONE";
        // }
        return item;
    }
}
