"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListElement = void 0;
var ListElement = /** @class */ (function () {
    function ListElement(value, next, prev) {
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
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
    ListElement.prototype.getPrev = function () {
        if (this.prev !== null) {
            return this.prev;
        }
        ;
        return null;
    };
    ListElement.prototype.setNext = function (value) {
        this.next = value;
    };
    ;
    ListElement.prototype.setPrev = function (value) {
        this.prev = value;
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
