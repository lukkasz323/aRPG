import { Game } from "./core/Game.js";
const canvas = document.getElementById("game-canvas");
const game = new Game(canvas);
await game.init();
game.run();
