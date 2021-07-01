"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFirstClass = void 0;
var MyFirstClass = /** @class */ (function () {
    function MyFirstClass() {
        this.a = 3;
    }
    MyFirstClass.prototype.calc = function () {
        return this.a + 3;
    };
    return MyFirstClass;
}());
exports.MyFirstClass = MyFirstClass;
