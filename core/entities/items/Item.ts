import { Circle } from "../Circle.js";
import { Entity } from "../Entity.js";
import { Rect } from "../Rect.js";

export class Item extends Entity {
    uiIcon: Rect = new Rect();
    circle: Circle = new Circle();

    constructor() {
        super();
    }

    static generate(): Item {
        const item = new Item();

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