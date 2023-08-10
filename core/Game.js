import { Scene } from "./Scene.js";
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
        this.scene = new Scene(dataByName, this.canvas);
    }
    run() {
        if (!this.dataByName) {
            throw new Error("init() wasn't properly awaited first.");
        }
        const fps = 60;
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        function gameLoop(scene, canvas) {
            scene.update();
            scene.render(canvas);
        }
    }
}
