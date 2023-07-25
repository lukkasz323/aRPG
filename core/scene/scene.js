import { Player } from "./entities/player.js";
export class Scene {
    entities = [];
    constructor() {
        this.entities.push(new Player());
        console.log(this);
    }
}
