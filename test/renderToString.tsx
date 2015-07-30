/// <reference path='../src/lib/jsx.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import React = require('../src/component/index');
import { Component } from '../src/component/index';
import { expect } from 'chai';

interface P extends Props { }
interface S { }
interface E extends Elements { }

describe('Render to string', () => {
    it('intrinsic element without props', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }

        let c = new C({ id: 'i'});
        expect(c.toString()).to.equal('<div id="i"></div>')
    });

    it('intrinsic element with one prop', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div data-a="a"></div>);
            }
        }

        let c = new C({ id: 'i'});
        expect(c.toString()).to.equal('<div id="i" data-a="a"></div>');
    });

    it('intrinsic element with multiple props', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div data-a="a" data-b="b"></div>);
            }
        }

        let c = new C({ id: 'i'});
        expect(c.toString()).to.equal('<div id="i" data-a="a" data-b="b"></div>');
    });

    it('intrinsic element with a ref', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div ref="hej"></div>);
            }
        }

        let c = new C({ id: 'i'});
        expect(c.toString()).to.equal('<div id="i" data-ref="hej"></div>');
    });

    it('intrinsic element with JSX one intrinsic child element', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div><div></div></div>);
            }
        }

        let c = new C({ id: 'i'});
        expect(c.toString()).to.equal('<div id="i"><div></div></div>');
    });

    it('render two consecutive ids', () => {
        class C extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div id="1"><div id="2"></div></div>);
            }
        }

        let c = new C({ id: 'i1'});
        expect(c.toString()).to.equal('<div id="i1"><div id="2"></div></div>');
    });

    it('render one element component in one component', () => {
        class C2 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div><C2 id="i2"></C2></div>);
            }
        }

        let c1 = new C1({ id: 'i1'});
        expect(c1.toString()).to.equal('<div id="i1"><div id="i2"></div></div>');
    });

    it('render multiple element component from one component', () => {
        class C3 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }
        class C2 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div>{this.children}</div>);
            }
        }
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div><C2 id="i2"></C2><C3 id="i3"></C3></div>);
            }
        }

        let c1 = new C1({ id: 'i1'});
        expect(c1.toString()).to.equal('<div id="i1"><div id="i2"></div><div id="i3"></div></div>');
    });

    it('render multiple nested element component from one component', () => {
        class C3 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }
        class C2 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div>{this.children}</div>);
            }
        }
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div><C2 id="i2"><C3 id="i3"></C3></C2></div>);
            }
        }

        let c1 = new C1({ id: 'i1'});
        expect(c1.toString()).to.equal('<div id="i1"><div id="i2"><div id="i3"></div></div></div>');
    });

    it('render multiple childen from one nested element component', () => {
        class C4 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div>{this.children}</div>);
            }
        }
        class C3 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }
        class C2 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div><C4 id="i4"><C2 id="i2"></C2><C3 id="i3"></C3></C4></div>);
            }
        }

        let c1 = new C1({ id: 'i1'});
        expect(c1.toString()).to.equal('<div id="i1"><div id="i4"><div id="i2"></div><div id="i3"></div></div></div>');
    });

    it('convert camel-cased props to dashed props', () => {
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div autoComplete></div>);
            }
        }

        let c1 = new C1({ id: 'i1'});
        expect(c1.toString()).to.equal('<div id="i1" auto-complete></div>');
    });
});
