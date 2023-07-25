import { Entity } from "./entities/Entity.js";
import { Player } from "./entities/Player.js";
import { Box } from "./entities/Box.js";
import { Label } from "./entities/Label.js";

export class Scene {
    entities: Entity[] = [];

    constructor() {
        this.entities.push(new Player());

        const hudBox = new Box();
        hudBox.physics.size.x = 256;
        hudBox.physics.size.y = 16;
        this.entities.push(hudBox);

        const hudLabel = new Label();
        hudLabel.physics.origin.x += 32;
        hudLabel.physics.origin.y += 32;
        this.entities.push(hudLabel);

        console.log(this);
    }
}