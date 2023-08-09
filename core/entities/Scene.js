import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { InputState } from "../InputState.js";
import { Player } from "./Player.js";
import { Level } from "./Level.js";
import { Camera } from "./Camera.js";
export class Scene extends Entity {
    dataByName;
    canvas;
    input = new InputState();
    camera;
    level;
    player;
    constructor(dataByName, canvas) {
        super();
        this.dataByName = dataByName;
        this.level = new Level(dataByName["level"]);
        this.player = new Player(new Vector2(100, 100), canvas);
        this.camera = new Camera(canvas);
        this.children.push(this.level);
        this.children.push(this.player);
        this.children.push(this.camera);
        console.log(this); // Debug
    }
    _update() {
        for (const entity of this.children) {
            entity._update(this);
        }
    }
    _render(canvas, scene) {
        const ctx = canvas.getContext("2d");
        // Background
        {
            ctx.globalAlpha = 1;
            ctx.fillStyle = "#444";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        // Render Queue
        {
            const renderQueue = [];
            this.addToRenderQueue(renderQueue);
            for (const entity of renderQueue.sort((a, b) => a.renderOrder - b.renderOrder)) {
                entity._render(ctx, scene);
            }
        }
        // // Debug crosshair
        // {
        //     ctx.globalAlpha = 1;
        //     ctx.lineWidth = 2;
        //     ctx.strokeStyle = "cyan";
        //     ctx.strokeRect(0, 0, canvas.width / 2, canvas.height / 2)
        // }
    }
    addToRenderQueue(renderQueue) {
        for (const entity of this.children) {
            if (entity.isEnabled) {
                entity.addToRenderQueue(renderQueue);
            }
        }
    }
}
