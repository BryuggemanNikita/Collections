"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListElement = void 0;
var ListElement = /** @class */ (function () {
    function ListElement(value, next) {
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    ;
    ListElement.prototype.getValue = function () {
        return this.value;
    };
    ;
    ListElement.prototype.getNext = function () {
        if (this.next !== null) {
            return this.next;
        }
        ;
        return null;
    };
    ;
    ListElement.prototype.setNext = function (value) {
        this.next = value;
    };
    ;
    ListElement.prototype.setValue = function (value) {
        this.value = value;
    };
    ;
    return ListElement;
}());
exports.ListElement = ListElement;
;
