export class Entity {
    children = [];
    renderOrder = 0;
    isEnabled = true;
    _update(arg1) {
        for (const child of this.children) {
            if (child.isEnabled) {
                child._update(arg1);
            }
        }
    }
    _render(arg1, arg2) { }
    addToRenderQueue(renderQueue) {
        for (const child of this.children) {
            if (child.isEnabled) {
                child.addToRenderQueue(renderQueue);
            }
        }
        renderQueue.push(this);
    }
}
