import { Game } from "./core/Game.js";

const canvas = document.getElementById("game-canvas");
const game = new Game(<HTMLCanvasElement>canvas);

game.run();