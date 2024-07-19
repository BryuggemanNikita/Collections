"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueArr = void 0;
var QueueArr = /** @class */ (function () {
    function QueueArr() {
        this.arr = [];
    }
    QueueArr.prototype.append = function (value) {
        this.arr.push(value);
    };
    ;
    QueueArr.prototype.pop = function () {
        return (this.arr.shift());
    };
    ;
    QueueArr.prototype.isEmpty = function () {
        return (this.arr.length === 0) ? true : false;
    };
    ;
    QueueArr.prototype.extend = function (values) {
        var _a;
        (_a = this.arr).push.apply(_a, values);
    };
    ;
    return QueueArr;
}());
exports.QueueArr = QueueArr;
;
var queue = new QueueArr();
// console.log(queue.isEmpty());
queue.extend(["h", "e", "l", "l", "o"]);
while (!queue.isEmpty()) {
    console.log(queue.pop());
}
;
