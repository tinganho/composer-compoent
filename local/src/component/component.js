/// <reference path='../../typings/es6-promise/es6-promise.d.ts' />
/// <reference path='../lib/jsx.d.ts' />
var debug_1 = require('./debug');
var Component = (function () {
    function Component(props, children) {
        this.props = props;
        this.hasRenderedFirstElement = false;
        this.hasBoundDom = false;
        if (!this.props.id) {
            debug_1.Debug.error('You must define an id for your component {0}', this.contructor.name);
        }
        this.children = children;
    }
    Component.prototype.remove = function () { return; };
    Component.prototype.fetch = function () { return; };
    Component.prototype.bindDom = function () {
        this.root = document.getElementById(this.props.id);
    };
    Component.prototype.toString = function () {
        return this.renderAndSetComponent().toString();
    };
    Component.prototype.toDom = function () {
        return this.renderAndSetComponent().toDom();
    };
    Component.prototype.renderAndSetComponent = function () {
        var component = this.render();
        component.setComponent(this);
        return component;
    };
    return Component;
})();
exports.Component = Component;
