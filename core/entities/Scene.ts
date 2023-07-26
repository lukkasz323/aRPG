import { Entity } from "./Entity.js";
import { Player } from "./Player.js";
import { Rect } from "./Rect.js";
import { Label } from "./Label.js";

export class Scene extends Entity {
    constructor() {
        super();

        this.children.push(new Player());

        const background = new Rect({x: 32, y: 32}, {x: 320, y: 320});
        background.physics.color = "green";
        this.children.push(background);

        this.children.push(new Label({x: 0, y: 0}, "Debug", 16));

        console.log(this); // Debug
    }

    _update(): void {
        for (const entity of this.children) {
            entity._update();
        }
    }

    _render(canvas: HTMLCanvasElement): void {
        const ctx = canvas.getContext("2d");
        super._render(ctx);

        // Background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}