export class Entity {
    // parent: Entity = null;
    children: Entity[] = [];

    // constructor(parent?: Entity) {
    //     this.parent = parent ? parent : null;
    // }

    _update(arg1?: any): void {}

    _render(arg1?: any): void {

        for (const entity of this.children) {
            entity._render(arg1);
        }
        console.log("render() on Entity", this);
    }

    renderChildren(arg1?: any): void {
        
    }
}