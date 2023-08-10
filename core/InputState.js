import { MouseState } from "./MouseState.js";
export class InputState {
    scene;
    mouse;
    constructor(scene) {
        this.scene = scene;
        this.mouse = new MouseState(scene);
    }
}
