import { Scene } from "./entities/Scene.js";

export class Game {
    dataByName: Map<string, string>;
    scene: Scene = new Scene();
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
    }

    run() {
        console.log(this.dataByName["level"]);
        if (!this.dataByName) {
            throw new Error("init() wasn't properly awaited first.");
        }

        const fps = 60;

        this.scene._render(this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        
        function gameLoop(scene: Scene, canvas: HTMLCanvasElement) {
            scene._update();
            scene._render(canvas);
        }
    }
}