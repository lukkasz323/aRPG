import { Game } from "./core/Game.js";
fetch("./data/test.txt")
    .then((res) => res.text())
    .then((text) => {
    console.log(text);
});
const canvas = document.getElementById("game-canvas");
const game = new Game(canvas);
game.run();
