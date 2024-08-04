"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListElement = void 0;
//Element for LinkedList
var LinkedListElement = /** @class */ (function () {
    function LinkedListElement(value, next, prev) {
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    ;
    LinkedListElement.prototype.getValue = function () {
        return this.value;
    };
    ;
    LinkedListElement.prototype.getNext = function () {
        if (this.next !== null) {
            return this.next;
        }
        ;
        return null;
    };
    ;
    LinkedListElement.prototype.getPrev = function () {
        if (this.prev !== null) {
            return this.prev;
        }
        ;
        return null;
    };
    LinkedListElement.prototype.setNext = function (value) {
        this.next = value;
    };
    ;
    LinkedListElement.prototype.setPrev = function (value) {
        this.prev = value;
    };
    ;
    LinkedListElement.prototype.setValue = function (value) {
        this.value = value;
    };
    ;
    LinkedListElement.prototype.toString = function () {
        return "".concat(this.value.toString()).concat((this.next !== null) ? this.next.toString() : "null").concat((this.prev !== null) ? this.prev.toString() : "null", "LinkedListElement");
    };
    ;
    return LinkedListElement;
}());
exports.LinkedListElement = LinkedListElement;
;
