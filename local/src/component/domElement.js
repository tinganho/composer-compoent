var DomElement = (function () {
    function DomElement(element) {
        this.element = element;
    }
    DomElement.prototype.addClass = function (className) {
        this.element.classList.add(className);
        return this;
    };
    DomElement.prototype.removeClass = function (className) {
        this.element.classList.remove(className);
        return this;
    };
    DomElement.prototype.onClick = function (listener) {
        this.element.addEventListener('click', listener, false);
        return this;
    };
    return DomElement;
})();
exports.DomElement = DomElement;
