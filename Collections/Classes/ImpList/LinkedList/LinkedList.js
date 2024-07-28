"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var ListElement_1 = require("./ListElement");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.Head = new ListElement_1.ListElement();
    }
    LinkedList.prototype.append = function (value) {
        if (this.Head.getValue() === null) {
            this.Head.setValue(value);
            return;
        }
        ;
        value = new ListElement_1.ListElement(value);
        var lastValue = this.Head.getNext();
        if (lastValue != null) {
            var last = lastValue;
            while (lastValue != null) {
                last = lastValue;
                lastValue = lastValue.getNext();
            }
            ;
            last === null || last === void 0 ? void 0 : last.setNext(value);
        }
        else {
            this.Head.setNext(value);
        }
        ;
    };
    ;
    LinkedList.prototype.clear = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.count = function () {
        var node = this.Head;
        var count = 0;
        while (node !== null) {
            count++;
            node = node.getNext();
        }
        return count;
    };
    ;
    LinkedList.prototype.index = function (value) {
        var node = this.Head;
        var valueNode = node.getValue();
        var ind = 0;
        var count = this.count();
        while (node !== null && valueNode !== value) {
            ind++;
            node = node.getNext();
            valueNode = node === null || node === void 0 ? void 0 : node.getValue();
        }
        ;
        return ind == count ? -1 : ind;
    };
    ;
    LinkedList.prototype.insert = function (ind, value) {
        value = new ListElement_1.ListElement(value);
        var index = 0;
        var leftNode = null;
        var rightNode = this.Head;
        while (index !== ind && rightNode !== null) {
            index++;
            leftNode = rightNode;
            rightNode = rightNode.getNext();
        }
        ;
        value.setPrev(leftNode);
        value.setNext(rightNode);
        leftNode === null || leftNode === void 0 ? void 0 : leftNode.setNext(value);
    };
    ;
    LinkedList.prototype.pop = function (ind) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.remove = function (value) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.getHead = function () {
        return this.Head;
    };
    ;
    return LinkedList;
}());
exports.LinkedList = LinkedList;
;
