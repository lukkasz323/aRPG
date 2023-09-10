import { Vector2 } from "./utils/Vector2.js";
import { InputState } from "./InputState.js";
import { Player } from "./entities/Player.js";
import { Level } from "./entities/Level.js";
import { Camera } from "./entities/Camera.js";
export class Scene {
    entities = [];
    dataByName;
    canvas;
    input;
    camera;
    level;
    player;
    constructor(dataByName, canvas) {
        this.dataByName = dataByName;
        this.canvas = canvas;
        this.input = new InputState(this);
        this.level = new Level(this, dataByName["level"]);
        this.player = new Player(this, new Vector2(100, 100), canvas);
        this.camera = new Camera(this, canvas);
        this.entities.push(this.level);
        this.entities.push(this.player);
        this.entities.push(this.camera);
        console.log(this); // Debug
    }
    update() {
        for (const entity of this.entities) {
            entity._update();
        }
    }
    render(canvas) {
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
            for (const entity of this.entities) {
                if (entity.isEnabled) {
                    entity._addToRenderQueue(renderQueue);
                }
            }
            for (const entity of renderQueue.sort((a, b) => a.renderOrder - b.renderOrder)) {
                entity._render(ctx);
            }
        }
        // // Debug
        // {
        //     ctx.globalAlpha = 1;
        //     ctx.lineWidth = 2;
        // }
    }
}
