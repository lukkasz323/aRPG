import { Scene } from "./entities/Scene.js";
export class Game {
    dataByName;
    scene;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
    }
    async init() {
        const fileNames = [
            "level",
            "test",
        ];
        const fetchPromises = fileNames
            .map((fileName) => fetch(`./data/${fileName}.txt`)
            .then(response => response.text()));
        const data = await Promise.all(fetchPromises);
        const dataByName = new Map();
        for (let i = 0; i < fileNames.length; i++) {
            const k = fileNames[i];
            const v = data[i];
            dataByName[k] = v;
        }
        this.dataByName = dataByName;
        this.scene = new Scene(dataByName);
    }
    run() {
        if (!this.dataByName) {
            throw new Error("init() wasn't properly awaited first.");
        }
        const fps = 60;
        this.scene._render(this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        function gameLoop(scene, canvas) {
            scene._update();
            scene._render(canvas);
        }
    }
}
