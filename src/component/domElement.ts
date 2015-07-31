
/// <reference path='../lib/jsx.d.ts' />

import * as u from './utils';

export class ComposerDOMElement implements DOMElement {
    public element: HTMLElement;

    constructor(element: HTMLElement | DOMElement) {
        if (this.isComposerDOMElement(element)) {
            this.element = element.element;
        }
        else {
            this.element = element;
        }
    }

    public get id() {
        return this.element.id;
    }

    private isComposerDOMElement(element: HTMLElement | DOMElement): element is DOMElement {
        return !!(element as ComposerDOMElement).findOne;
    }

    public findOne(query: string): ComposerDOMElement {
        let el = this.element.querySelector(query);
        return el ? new ComposerDOMElement(el as HTMLElement) : null;
    }

    public findAll(query: string): ComposerDOMElement[] {
        let elements = this.element.querySelectorAll(query) as any;
        return u.map(elements as any,element => {
            return new ComposerDOMElement(element as HTMLElement);
        });
    }

    public getText(): string {
        return this.element.textContent;
    }

    public setAttribute(name: string, value?: string): ComposerDOMElement {
        this.element.setAttribute(name, value);
        return this;
    }

    public getHTML(): string {
        return this.element.innerHTML;
    }

    public append(element: DOMElement): ComposerDOMElement {
        this.element.parentNode.appendChild(element.element);
        return this;
    }

    public prepend(element: DOMElement): ComposerDOMElement {
        this.element.parentNode.insertBefore(element.element, this.element.parentNode.firstChild);
        return this;
    }

    public before(element: DOMElement): ComposerDOMElement {
        this.element.parentNode.insertBefore(element.element, this.element);
        return this;
    }

    public after(element: DOMElement): ComposerDOMElement {
        this.element.parentNode.insertBefore(element.element, this.element.parentNode.lastChild);
        return this;
    }

    public hide(): ComposerDOMElement {
        this.element.style.direction = 'none';
        return this;
    }

    public remove(): void {
        this.element.remove();
    }

    public addClass(className: string): ComposerDOMElement {
        this.element.classList.add(className);
        return this;
    }

    public removeClass(className: string): ComposerDOMElement {
        this.element.classList.remove(className);
        return this;
    }

    public onClick(listener: EventListener): ComposerDOMElement {
        this.element.addEventListener('click', listener, false);
        return this;
    }

    public onDbClick(listener: EventListener): ComposerDOMElement {
        this.element.addEventListener('dbclick', listener, false);
        return this;
    }

    public onSubmit(listener: EventListener): ComposerDOMElement {
        this.element.addEventListener('submit', listener, false);
        return this;
    }

    public onFocus(listener: EventListener): ComposerDOMElement {
        this.element.addEventListener('focus', listener, false);
        return this;
    }

    public onBlur(listener: EventListener): ComposerDOMElement {
        this.element.addEventListener('blur', listener, false);
        return this;
    }
}