
import { Component } from './component';
import { DomElement } from './domElement';

export function createElement(
    element: string | (new(props: Props, children: Child[]) => Component<any, any, any>),
    props: any,
    ...children: Child[]): JSX.Element {

    let component: Component<any, any, any>;

    function setComponent(c: Component<any, any, any>) {
        component = c;
    }

    function toDom(): Node {
        let frag = document.createDocumentFragment();
        if (typeof element === 'string') {
            let child = document.createElement(element);

            if (!component.hasRenderedFirstElement) {
                child.setAttribute('id', component.props.id);
                component.hasRenderedFirstElement = true;
            }

            for (let p in props) {
                if (p === 'id') {
                    continue;
                }
                else if (p === 'ref') {
                    if (props[p] in component.elements) {
                        console.warn(`You are overriding the element reference '${(component as any).props[p]}'.`);
                    }
                    component.elements[props[p]] = new DomElement(child);
                }
                else {
                    child.setAttribute(convertCamelCasesToDashes(p), props[p]);
                }
            }

            frag.appendChild(child);
        }
        else {
            let el = new element(props, children);
            frag.appendChild(el.toDom());
        }

        for (let child of children) {
            if (typeof child === 'string') {
                frag.textContent += child;
            }
            else if (isArray<JSX.Element[]>(child)) {
                for (let c of child) {
                    if (c.isIntrinsic) {
                        c.setComponent(component);
                    }
                    frag.appendChild(c.toDom());
                }
            }
            else {
                if (child.isIntrinsic) {
                    child.setComponent(component);
                }
                frag.appendChild(child.toDom());
            }
        }

        return frag;
    }

    function isArray<T>(x: any): x is T {
        return x instanceof Array;
    }

    function convertCamelCasesToDashes(text: string) {
        return text.replace(/([A-Z])/g, (m) => {
            return '-' + m.toLowerCase();
        });
    }

    function toString(): string {
        let frag = '';
        if (typeof element === 'string') {
            frag = `<${element}`;

            if (!component.hasRenderedFirstElement) {
                frag += ` id="${component.props.id}"`;
            }

            for (let p in props) {
                if (typeof props[p] !== 'boolean' && typeof props[p] !== 'string') {
                    continue;
                }
                if (p === 'id' && !component.hasRenderedFirstElement) {
                    continue;
                }
                if (typeof props[p] === 'boolean') {
                    frag += ` ${convertCamelCasesToDashes(p)}`;
                }
                else if (p === 'ref') {
                    frag += ` data-ref="${props[p]}"`;
                }
                else {
                    frag += ` ${convertCamelCasesToDashes(p)}="${props[p]}"`;
                }
            }

            frag += '>';

            component.hasRenderedFirstElement = true;
            for (let child of children) {
                if (typeof child === 'string') {
                    frag += child;
                }
                else if (isArray<JSX.Element[]>(child)) {
                    for (let c of child) {
                        frag += childToString(c);
                    }
                }
                else {
                    frag += childToString(child);
                }
            }

            frag += `</${element}>`;
        }
        else {
            let el = new element(props, children);
            frag += el.toString();
        }

        return frag;
    }

    function childToString(child: JSX.Element): string {
        if (child.isIntrinsic) {
            child.setComponent(component);
        }
        return child.toString();
    }

    /**
     * Set references by binding the elements to the component. Should only
     * be called on the client side.
     */
    function bindDom(): void {
        component.root = document.getElementById(component.props.id);

        for (let p in props) {
            if (p === 'ref') {
                component.elements[props[p]] = component.root.querySelector(`[data-ref="${props[p]}"]`);
            }
        }
    }

    return {
        toDom,
        toString,
        setComponent,
        bindDom,
        isIntrinsic: typeof element === 'string'
    }
}