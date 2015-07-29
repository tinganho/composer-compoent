
/// <reference path='./template.d.ts'/>
/// <reference path='../typings/es6-promise/es6-promise.d.ts'/>

let inClient: boolean;
let inServer: boolean;

if ((window as any)) {
    inClient = true;
    inServer = false;
}
else {
    inClient = false;
    inServer = true;
}

interface ComponentProps {
    [prop: string]: string;
}

export const enum Platform {
    Client,
    Server,
}

namespace Composer {
    export interface Element<P, S, R> {
        toString: () => string;
        toDom: () => Node;
        setComponent: (component: Component<P, S, R>) => void;
    }

    export abstract class Component<P, S, R> {
        public refs: R;
        public states: S;
        constructor(public props: P, children: Children<any, any, any>) {}
        public render(): Element<any, any, any> { return null }
        public remove(): Promise<void> { return null }
        public abstract fetch<R>(): Promise<R>;
        public abstract bindDom(): Promise<void>;

        public toString(): string {
            return this.render().toString();
        }

        public toDom(): Node {
            let frag = this.render().toDom();
            return frag;
        }
    }

    export type Children<P, S, R> = Element<P, S, R> | string;
}

function createElement<P extends ComponentProps, S, R>(element: string | (new<P, S, R>(props: ComponentProps) => Composer.Component<P, S, R>), props: P, ...children: Composer.Children<any, any, any>[]): Composer.Element<P, S, R> {
    let component: Composer.Component<any, any, any>;

    function setComponent<P, S, R>(c: Composer.Component<P, S, R>) {
        component = c;
    }

    function toDom(): Node {
        let frag = document.createDocumentFragment();
        if (typeof element === 'string') {
            let child = document.createElement(element);

            for (let prop in props) {
                if (prop === 'ref') {
                    if (props[prop] in component.refs) {
                        console.warn(`You are overriding the element reference '${(component as any).props[prop]}'.`);
                    }
                    component.refs[props[prop]] = child;
                }
                child.setAttribute(prop, props[prop]);
            }

            frag.appendChild(child);
        }
        else {
            let el = new element<P, S, R>(props);
            frag.appendChild(el.toDom());
        }

        for (let child of children) {
            if (typeof child === 'string') {
                frag.textContent += child;
            }
            else {
                frag.appendChild(child.toDom());
            }
        }

        return frag;
    }

    function toString(): string {
        let frag = '';
        if (typeof element === 'string') {
            frag = `<${element}`;

            for (let p in props) {
                if (typeof props[p] === "boolean") {
                    frag += `${p}`;
                }
                else {
                    frag += `${p}=${props[p]}`;
                }
            }

            frag += '>';

            for (let child of children) {
                if (typeof child === 'string') {
                    frag += child;
                }
                else {
                    frag += child.toString();
                }
            }

            frag += `</${element}>`;
        }
        else {
            let el = new element<P, S, R>(props);
            frag += el.toString();
        }

        return frag;
    }

    return {
        toDom,
        toString,
        setComponent,
    }
}