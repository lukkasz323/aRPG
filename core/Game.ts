import { EventManager } from "./EventManager.js";
import { Scene } from "./entities/Scene.js";

export class Game {
    dataByName: Map<string, string>;
    scene: Scene;
    eventManager: EventManager = new EventManager();
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    async init(): Promise<void> {
        const fileNames = [
            "level",
            "test",
        ];

        const fetchPromises: Promise<string>[] = fileNames
            .map((fileName) => 
                fetch(`./data/${fileName}.txt`)
                    .then(response => response.text())
        );

        const data: string[] = await Promise.all(fetchPromises);

        const dataByName = new Map<string, string>();
        for (let i = 0; i < fileNames.length; i++) {
            const k = fileNames[i];
            const v = data[i];

            dataByName[k] = v;
        }

        this.dataByName = dataByName;
        this.scene = new Scene(dataByName, this.canvas);
    }

    run(): void {
        if (!this.dataByName) {
            throw new Error("init() wasn't properly awaited first.");
        }

        const fps = 60;

        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        this.eventManager.addEvents(this.canvas, this.scene);
        
        function gameLoop(scene: Scene, canvas: HTMLCanvasElement): void {
            scene._update(scene);
            scene._render(canvas, scene);
        }
    }
}