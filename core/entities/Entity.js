export class Entity {
    scene;
    children = [];
    renderOrder = 0;
    isEnabled = true;
    constructor(scene) {
        this.scene = scene;
    }
    _update() {
        for (const child of this.children) {
            if (child.isEnabled) {
                child._update();
            }
        }
    }
    _render(ctx) { }
    addToRenderQueue(renderQueue) {
        for (const child of this.children) {
            if (child.isEnabled) {
                child.addToRenderQueue(renderQueue);
            }
        }
        renderQueue.push(this);
    }
}
