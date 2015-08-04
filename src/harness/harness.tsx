
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

export function fireEvent(node: any, eventName: string) {
    // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
    var doc: any;
    if (node.ownerDocument) {
        doc = node.ownerDocument;
    }
    else if (node.nodeType == 9) {
        doc = node;
    }
    else {
        throw new Error('Invalid node passed to fireEvent: ' + node.id);
    }

     if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = '';

        switch (eventName) {
            case 'click': // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
            case 'dbclick':
            case 'mousedown':
            case 'mouseup':
                eventClass = 'MouseEvents';
                break;

            case 'focus':
            case 'change':
            case 'blur':
            case 'select':
                eventClass = 'InputEvents';
                break;

            case 'submit':
                eventClass = 'FormEvents';
                break;

            default:
                throw 'fireEvent: Couldn\'t find an event class for event \'' + eventName + '\'.';
                break;
        }
        var event = doc.createEvent(eventClass);

        var bubbles = eventName == 'change' ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action
        node.dispatchEvent(event, true);
    }
    else  if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events
        node.fireEvent('on' + eventName, event);
    }
}