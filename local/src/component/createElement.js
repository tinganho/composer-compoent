var domElement_1 = require('./domElement');
function createElement(element, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var component;
    function setComponent(c) {
        component = c;
    }
    function toDom() {
        var frag = document.createDocumentFragment();
        if (typeof element === 'string') {
            var child = document.createElement(element);
            if (!component.hasRenderedFirstElement) {
                child.setAttribute('id', component.props.id);
                component.hasRenderedFirstElement = true;
            }
            for (var p in props) {
                if (p === 'id') {
                    continue;
                }
                else if (p === 'ref') {
                    if (props[p] in component.elements) {
                        console.warn("You are overriding the element reference '" + component.props[p] + "'.");
                    }
                    component.elements[props[p]] = new domElement_1.DomElement(child);
                }
                else {
                    child.setAttribute(convertCamelCasesToDashes(p), props[p]);
                }
            }
            frag.appendChild(child);
        }
        else {
            var el = new element(props, children);
            frag.appendChild(el.toDom());
        }
        for (var _i = 0; _i < children.length; _i++) {
            var child = children[_i];
            if (typeof child === 'string') {
                frag.textContent += child;
            }
            else if (isArray(child)) {
                for (var _a = 0; _a < child.length; _a++) {
                    var c = child[_a];
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
    function isArray(x) {
        return x instanceof Array;
    }
    function convertCamelCasesToDashes(text) {
        return text.replace(/([A-Z])/g, function (m) {
            return '-' + m.toLowerCase();
        });
    }
    function toString() {
        var frag = '';
        if (typeof element === 'string') {
            frag = "<" + element;
            if (!component.hasRenderedFirstElement) {
                frag += " id=\"" + component.props.id + "\"";
            }
            for (var p in props) {
                if (p === 'id' && !component.hasRenderedFirstElement) {
                    continue;
                }
                else if (typeof props[p] === 'boolean') {
                    frag += " " + convertCamelCasesToDashes(p);
                }
                else if (p === 'ref') {
                    frag += " data-ref=\"" + props[p] + "\"";
                }
                else {
                    frag += " " + convertCamelCasesToDashes(p) + "=\"" + props[p] + "\"";
                }
            }
            frag += '>';
            component.hasRenderedFirstElement = true;
            for (var _i = 0; _i < children.length; _i++) {
                var child = children[_i];
                if (typeof child === 'string') {
                    frag += child;
                }
                else if (isArray(child)) {
                    for (var _a = 0; _a < child.length; _a++) {
                        var c = child[_a];
                        frag += childToString(c);
                    }
                }
                else {
                    frag += childToString(child);
                }
            }
            frag += "</" + element + ">";
        }
        else {
            var el = new element(props, children);
            frag += el.toString();
        }
        return frag;
    }
    function childToString(child) {
        if (child.isIntrinsic) {
            child.setComponent(component);
        }
        return child.toString();
    }
    /**
     * Set references by binding the elements to the component. Should only
     * be called on the client side.
     */
    function bindDom() {
        component.root = document.getElementById(component.props.id);
        for (var p in props) {
            if (p === 'ref') {
                component.elements[props[p]] = component.root.querySelector("[data-ref=\"" + props[p] + "\"]");
            }
        }
    }
    return {
        toDom: toDom,
        toString: toString,
        setComponent: setComponent,
        bindDom: bindDom,
        isIntrinsic: typeof element === 'string'
    };
}
exports.createElement = createElement;
