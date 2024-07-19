"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLinkedList = void 0;
var ListElement_1 = require("./ListElement");
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList() {
        this.Head = new ListElement_1.ListElement();
    }
    SingleLinkedList.prototype.add = function (value) {
        // const next = new ListElement(value);
        if (this.Head.getValue() === null) {
            this.Head.setValue(value);
            return;
        }
        ;
        if (this.Head.getNext() != null) {
            var lastValue = this.Head.getNext();
            var last = lastValue;
            while (lastValue != null) {
                last = lastValue;
                lastValue = lastValue.getNext();
            }
            ;
            value = new ListElement_1.ListElement(value);
            last === null || last === void 0 ? void 0 : last.setNext(value);
        }
        else {
            value = new ListElement_1.ListElement(value);
            this.Head.setNext(value);
        }
    };
    ;
    SingleLinkedList.prototype.getHead = function () {
        return this.Head;
    };
    ;
    return SingleLinkedList;
}());
exports.SingleLinkedList = SingleLinkedList;
;
