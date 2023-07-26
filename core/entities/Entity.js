export class Entity {
    // scene: Scene;
    children = [];
    renderOrder = 0;
    // constructor(scene: Entity) {
    //     this.scene = scene;
    // }
    _update(arg1) { }
    _render(arg1, arg2) { }
    addToRenderQueue(renderQueue) {
        for (const entity of this.children) {
            entity.addToRenderQueue(renderQueue);
        }
        renderQueue.push(this);
    }
}
