import { Circle } from "../Circle.js";
import { Entity } from "../Entity.js";
import { Rect } from "../Rect.js";
export class Item extends Entity {
    uiIcon;
    circle;
    constructor(scene) {
        super(scene);
        this.uiIcon = new Rect(scene);
        this.circle = new Circle(scene);
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
