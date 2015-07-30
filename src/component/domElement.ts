
export class DomElement {
    constructor(public element: HTMLElement) {

    }

    public addClass(className: string): DomElement {
        this.element.classList.add(className);
        return this;
    }

    public removeClass(className: string): DomElement {
        this.element.classList.remove(className);
        return this;
    }

    public onClick(listener: EventListener): DomElement {
        this.element.addEventListener('click', listener, false);
        return this;
    }
}