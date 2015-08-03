
/// <reference path='../src/lib/jsx.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import React = require('../src/component/index');
import { Component } from '../src/component/index';
import { getMountedDOMHTMLString, customElementsLength } from '../src/harness/harness';
import { expect } from 'chai';

interface P extends Props { }
interface S { }
interface E extends Elements { }

describe('Get instances of', () => {
    it('', () => {
        class C1 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<C2 id="hej"></C2>);
            }
        }
         class C2 extends Component<P, S, E> {
            public render(): JSX.Element {
                return (<div></div>);
            }
        }

        let c1 = new C1({ id: 'i1' });
        c1.getInstancesOf()
    });
});