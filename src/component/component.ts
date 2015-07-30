
/// <reference path='../../typings/es6-promise/es6-promise.d.ts' />
/// <reference path='../lib/jsx.d.ts' />

import { Platform } from './platform';
import { Debug } from './debug';

export abstract class Component<P extends Props, S, E extends Elements> {
    public root: Element;
    public elements: E;
    public states: S;
    public platform: Platform;
    public hasRenderedFirstElement = false;
    public hasBoundDom = false;
    public children: Child[];

    constructor(
        public props: P,
        children?: Child[]) {

        if (!this.props.id) {
            Debug.error('You must define an id for your component {0}', (this as any).contructor.name);
        }
        this.children = children;
    }

    public abstract render(): JSX.Element;
    public remove(): Promise<void> { return; }
    public fetch(): Promise<P> { return; }

    public bindDom(): void {
        this.root = document.getElementById(this.props.id);
    }

    public toString(): string {
        return this.renderAndSetComponent().toString();
    }

    public toDom(): Node {
        return this.renderAndSetComponent().toDom();
    }

    private renderAndSetComponent(): JSX.Element {
        let component = this.render();
        component.setComponent(this);
        return component;
    }
}