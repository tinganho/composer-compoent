/// <reference path='../src/lib/jsx.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('../src/component/index');
var index_1 = require('../src/component/index');
var chai_1 = require('chai');
describe('Render to string', function () {
    it('intrinsic element without props', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i' });
        chai_1.expect(c.toString()).to.equal('<div id="i"></div>');
    });
    it('intrinsic element with one prop', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", {"data-a": "a"}));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i' });
        chai_1.expect(c.toString()).to.equal('<div id="i" data-a="a"></div>');
    });
    it('intrinsic element with multiple props', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", {"data-a": "a", "data-b": "b"}));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i' });
        chai_1.expect(c.toString()).to.equal('<div id="i" data-a="a" data-b="b"></div>');
    });
    it('intrinsic element with a ref', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", {"ref": "hej"}));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i' });
        chai_1.expect(c.toString()).to.equal('<div id="i" data-ref="hej"></div>');
    });
    it('intrinsic element with JSX one intrinsic child element', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("div", null)));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i' });
        chai_1.expect(c.toString()).to.equal('<div id="i"><div></div></div>');
    });
    it('render two consecutive ids', function () {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                _super.apply(this, arguments);
            }
            C.prototype.render = function () {
                return (React.createElement("div", {"id": "1"}, React.createElement("div", {"id": "2"})));
            };
            return C;
        })(index_1.Component);
        var c = new C({ id: 'i1' });
        chai_1.expect(c.toString()).to.equal('<div id="i1"><div id="2"></div></div>');
    });
    it('render one element component in one component', function () {
        var C2 = (function (_super) {
            __extends(C2, _super);
            function C2() {
                _super.apply(this, arguments);
            }
            C2.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C2;
        })(index_1.Component);
        var C1 = (function (_super) {
            __extends(C1, _super);
            function C1() {
                _super.apply(this, arguments);
            }
            C1.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(C2, {"id": "i2"})));
            };
            return C1;
        })(index_1.Component);
        var c1 = new C1({ id: 'i1' });
        chai_1.expect(c1.toString()).to.equal('<div id="i1"><div id="i2"></div></div>');
    });
    it('render multiple element component from one component', function () {
        var C3 = (function (_super) {
            __extends(C3, _super);
            function C3() {
                _super.apply(this, arguments);
            }
            C3.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C3;
        })(index_1.Component);
        var C2 = (function (_super) {
            __extends(C2, _super);
            function C2() {
                _super.apply(this, arguments);
            }
            C2.prototype.render = function () {
                return (React.createElement("div", null, this.children));
            };
            return C2;
        })(index_1.Component);
        var C1 = (function (_super) {
            __extends(C1, _super);
            function C1() {
                _super.apply(this, arguments);
            }
            C1.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(C2, {"id": "i2"}), React.createElement(C3, {"id": "i3"})));
            };
            return C1;
        })(index_1.Component);
        var c1 = new C1({ id: 'i1' });
        chai_1.expect(c1.toString()).to.equal('<div id="i1"><div id="i2"></div><div id="i3"></div></div>');
    });
    it('render multiple nested element component from one component', function () {
        var C3 = (function (_super) {
            __extends(C3, _super);
            function C3() {
                _super.apply(this, arguments);
            }
            C3.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C3;
        })(index_1.Component);
        var C2 = (function (_super) {
            __extends(C2, _super);
            function C2() {
                _super.apply(this, arguments);
            }
            C2.prototype.render = function () {
                return (React.createElement("div", null, this.children));
            };
            return C2;
        })(index_1.Component);
        var C1 = (function (_super) {
            __extends(C1, _super);
            function C1() {
                _super.apply(this, arguments);
            }
            C1.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(C2, {"id": "i2"}, React.createElement(C3, {"id": "i3"}))));
            };
            return C1;
        })(index_1.Component);
        var c1 = new C1({ id: 'i1' });
        chai_1.expect(c1.toString()).to.equal('<div id="i1"><div id="i2"><div id="i3"></div></div></div>');
    });
    it('render multiple childen from one nested element component', function () {
        var C4 = (function (_super) {
            __extends(C4, _super);
            function C4() {
                _super.apply(this, arguments);
            }
            C4.prototype.render = function () {
                return (React.createElement("div", null, this.children));
            };
            return C4;
        })(index_1.Component);
        var C3 = (function (_super) {
            __extends(C3, _super);
            function C3() {
                _super.apply(this, arguments);
            }
            C3.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C3;
        })(index_1.Component);
        var C2 = (function (_super) {
            __extends(C2, _super);
            function C2() {
                _super.apply(this, arguments);
            }
            C2.prototype.render = function () {
                return (React.createElement("div", null));
            };
            return C2;
        })(index_1.Component);
        var C1 = (function (_super) {
            __extends(C1, _super);
            function C1() {
                _super.apply(this, arguments);
            }
            C1.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(C4, {"id": "i4"}, React.createElement(C2, {"id": "i2"}), React.createElement(C3, {"id": "i3"}))));
            };
            return C1;
        })(index_1.Component);
        var c1 = new C1({ id: 'i1' });
        chai_1.expect(c1.toString()).to.equal('<div id="i1"><div id="i4"><div id="i2"></div><div id="i3"></div></div></div>');
    });
    it('convert camel-cased props to dashed props', function () {
        var C1 = (function (_super) {
            __extends(C1, _super);
            function C1() {
                _super.apply(this, arguments);
            }
            C1.prototype.render = function () {
                return (React.createElement("div", {"autoComplete": true}));
            };
            return C1;
        })(index_1.Component);
        var c1 = new C1({ id: 'i1' });
        chai_1.expect(c1.toString()).to.equal('<div id="i1" auto-complete></div>');
    });
});
