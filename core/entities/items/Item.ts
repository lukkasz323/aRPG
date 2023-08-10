import { Circle } from "../Circle.js";
import { Entity } from "../Entity.js";
import { Rect } from "../Rect.js";
import { Scene } from "../../Scene.js";

export class Item extends Entity {
    uiIcon: Rect;
    circle: Circle;

    constructor(scene: Scene) {
        super(scene);

        this.uiIcon = new Rect(scene);
        this.circle = new Circle(scene);
    }

    static generate(scene: Scene): Item {
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