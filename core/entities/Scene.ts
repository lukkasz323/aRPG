import { Vector2 } from "../utils/Vector2.js";
import { Entity } from "./Entity.js";
import { Player } from "./Player.js";
import { Label } from "./Label.js";
import { Level } from "./Level.js";
import { InputState } from "../InputState.js";

export class Scene extends Entity {
    dataByName: Map<string, string>;
    input: InputState = new InputState();

    constructor(dataByName: Map<string, string>) {
        super();

        this.dataByName = dataByName;

        this.children.push(new Player(new Vector2(90, 90)));
        this.children.push(new Label(new Vector2(16, 16), "Debug", 16));
        this.children.push(new Level(dataByName["level"]));

        console.log(this); // Debug
    }

    _update(): void {
        for (const entity of this.children) {
            entity._update();
        }
    }

    _render(canvas: HTMLCanvasElement): void {
        const ctx = canvas.getContext("2d");

        // Background
        {
        ctx.fillStyle = "white";
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

    addToRenderQueue(renderQueue: Entity[]): void {
        for (const entity of this.children) {
            entity.addToRenderQueue(renderQueue);
        }
    }
}