import { Player } from "./entities/Player.js";
import { UIElement } from "./entities/UIElement.js";
export class Scene {
    entities = [];
    constructor() {
        this.entities.push(new Player());
        this.entities.push(new UIElement());
        console.log(this);
    }
}
