export class Entity {
    children: Entity[] = [];
    renderOrder: number = 0;
    isEnabled: boolean = true;
    
    _update(arg1?: any): void {
        for (const child of this.children) {
            if (child.isEnabled) {
                child._update(arg1);
            }
        }
    }

    _render(arg1?: any, arg2?: any): void {}

    addToRenderQueue(renderQueue: Entity[]): void {
        for (const child of this.children) {
            if (child.isEnabled) {
                child.addToRenderQueue(renderQueue);
            }
        }

        renderQueue.push(this);
    }
}