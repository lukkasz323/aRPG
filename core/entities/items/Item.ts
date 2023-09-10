import { Circle } from "../Circle.js";
import { Entity } from "../Entity.js";
import { Rect } from "../Rect.js";
import { Scene } from "../../Scene.js";
import { Vector2 } from "../../utils/Vector2.js";

export class Item extends Entity {
    uiIcon: Rect;
    collision: Circle;

    constructor(scene: Scene, origin?: Vector2, size?: Vector2, textureName?: string) {
        super(scene);

        this.uiIcon = new Rect(scene, origin, size, undefined, undefined, undefined, undefined, true, false, false, textureName, 30);
        // this.collision = new Circle(scene);

        this.children.push(this.uiIcon);
        // this.children.push(this.collision);
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