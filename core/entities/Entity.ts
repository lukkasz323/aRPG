import { Scene } from "../Scene";

export class Entity {
    scene: Scene;
    children: Entity[] = [];
    renderOrder: number = 0;
    isEnabled: boolean = true;
    
    constructor(scene: Scene) {
        this.scene = scene;
    }

    _update(): void {
        for (const child of this.children) {
            if (child.isEnabled) {
                child._update();
            }
        }
    }

    _render(ctx: CanvasRenderingContext2D): void {}

    _addToRenderQueue(renderQueue: Entity[]): void {
        for (const child of this.children) {
            if (child.isEnabled) {
                child._addToRenderQueue(renderQueue);
            }
        }

        renderQueue.push(this);
    }
}