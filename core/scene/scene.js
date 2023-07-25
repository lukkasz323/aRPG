import { Player } from "./entities/Player.js";
import { Rect as Rect } from "./entities/Rect.js";
import { Label } from "./entities/Label.js";
export class Scene {
    entities = [];
    constructor() {
        this.entities.push(new Player());
        const hudBox = new Rect({ x: 333, y: 123 });
        this.entities.push(hudBox);
        const hudLabel = new Label({ x: 123, y: 56 }, "Aha");
        this.entities.push(hudLabel);
        console.log(this); // Debug
    }
}
