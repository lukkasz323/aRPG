export class Entity {
    children = [];
    renderOrder = 0;
    isEnabled = true;
    _update(arg1) { }
    _render(arg1, arg2) { }
    addToRenderQueue(renderQueue) {
        for (const entity of this.children) {
            if (entity.isEnabled) {
                entity.addToRenderQueue(renderQueue);
            }
        }
        renderQueue.push(this);
    }
}
