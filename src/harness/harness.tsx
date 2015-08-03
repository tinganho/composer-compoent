
/// <reference path='../lib/jsx.d.ts' />

import React = require('../component/index');
import { Component } from '../component/index';

interface P extends Props { }
interface S { }
interface E { }

function getMountNode() {
    return document.getElementById('test');
}

export function getMountedDOMHTMLString(frag: DocumentFragment): string {
    let testMount = getMountNode();
    testMount.innerHTML = '';
    testMount.appendChild(frag);
    return testMount.innerHTML;;
}

export function prepareHTML(HTML: string): void {
    let testMount = getMountNode();
    testMount.innerHTML = HTML;
}

export function customElementsLength(obj: Object): number {
    let length = 0;
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            length++
        }
    }
    return length;
}