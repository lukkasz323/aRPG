import { MouseState } from "./MouseState.js";
import { Scene } from "./Scene.js";

export class InputState {
    mouse: MouseState;

    constructor(public scene: Scene) {
        this.mouse = new MouseState(scene);
    }
}