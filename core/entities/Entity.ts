export class Entity {
    // scene: Scene;
    children: Entity[] = [];
    renderOrder: number = 0;

    // constructor(scene: Entity) {
    //     this.scene = scene;
    // }

    _update(arg1?: any): void {}

    _render(arg1?: any, arg2?: any): void {}

    addToRenderQueue(renderQueue: Entity[]): void {
        for (const entity of this.children) {
            entity.addToRenderQueue(renderQueue);
        }

        renderQueue.push(this);
    }
}