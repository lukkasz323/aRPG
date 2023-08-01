import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Player } from "./Player.js";
import { Label } from "./Label.js";
import { Level } from "./Level.js";
import { InputState } from "../InputState.js";
export class Scene extends Entity {
    dataByName;
    input = new InputState();
    player = new Player(new Vector2(100, 100));
    level;
    constructor(dataByName) {
        super();
        this.dataByName = dataByName;
        this.level = new Level(dataByName["level"]);
        this.children.push(this.player);
        this.children.push(this.level);
        this.children.push(new Label(new Vector2(64, 64), "Debug", 16));
        console.log(this); // Debug
    }
    _update() {
        for (const entity of this.children) {
            entity._update(this);
        }
    }
    _render(canvas) {
        const ctx = canvas.getContext("2d");
        // Background
        {
            ctx.fillStyle = "#444";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        // Render Queue
        {
            const renderQueue = [];
            this.addToRenderQueue(renderQueue);
            for (const entity of renderQueue.sort((a, b) => a.renderOrder - b.renderOrder)) {
                entity._render(ctx);
            }
        }
    }
    addToRenderQueue(renderQueue) {
        for (const entity of this.children) {
            entity.addToRenderQueue(renderQueue);
        }
    }
}
