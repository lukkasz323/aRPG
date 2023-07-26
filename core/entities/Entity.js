export class Entity {
    // parent: Entity = null;
    children = [];
    // constructor(parent?: Entity) {
    //     this.parent = parent ? parent : null;
    // }
    _update(arg1) { }
    _render(arg1) {
        for (const entity of this.children) {
            entity._render();
        }
        console.log("render() on Entity", this);
    }
}
