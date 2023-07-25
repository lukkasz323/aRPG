import { Vector2 } from "../utils/vector2.js";
import { Physics } from "./components/physics.js";
import { Entity } from "./entities/entity.js";
import { Player } from "./entities/player.js";

export class Scene {
    entities: Entity[] = [];

    constructor() {
        this.entities.push(new Player());
        
        console.log(this);
    }
}