class Component {

    #id;
    #parent;
    #children;
    #visibility;

    constructor(id, children) {
        this.#id = id;
        this.#children = children;
        this.#visibility = null;
        this.#parent = null;
        this.#children.forEach(child => child.#parent = this);
    }

    set visibility(value) {
        this.#visibility = value;
    }

    get isVisible() {
        // TODO: bug fix required
        return this.#visibility != null ? this.#visibility
            : this.#parent?.visibility != null ? this.#parent.#visibility
                : true;
    }

    toString() {
        return this.#id;
    }
}