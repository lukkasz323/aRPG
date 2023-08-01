export class Entity {
    children: Entity[] = [];
    renderOrder: number = 0;
    isEnabled: boolean = true;
    
    _update(arg1?: any): void {}

    _render(arg1?: any, arg2?: any): void {}

    addToRenderQueue(renderQueue: Entity[]): void {
        for (const entity of this.children) {
            if (entity.isEnabled) {
                entity.addToRenderQueue(renderQueue);
            }
        }

        renderQueue.push(this);
    }
}