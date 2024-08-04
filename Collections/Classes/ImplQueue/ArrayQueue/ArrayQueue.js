"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayQueue = void 0;
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.arr = [];
    }
    ArrayQueue.prototype.append = function (value) {
        this.arr.push(value);
    };
    ;
    ArrayQueue.prototype.pop = function () {
        return (this.arr.shift());
    };
    ;
    ArrayQueue.prototype.isEmpty = function () {
        return (this.arr.length === 0) ? true : false;
    };
    ;
    ArrayQueue.prototype.extend = function (values) {
        var _a;
        (_a = this.arr).push.apply(_a, values);
    };
    ;
    ArrayQueue.prototype.clear = function () {
        this.arr = [];
    };
    ;
    ArrayQueue.prototype.size = function () {
        return this.arr.length;
    };
    ;
    ArrayQueue.prototype.has = function (value) {
        var flag = false;
        this.arr.forEach(function (e) {
            if (e === value)
                flag = true;
        });
        return flag;
    };
    ;
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;
;
// let queue = new ArrayQueue();
// queue.extend(["h", "e", "l", "l", "o", " "]);
// queue.append("W");
// queue.append("r");
// queue.append("l");
// queue.append("d");
// while(!queue.isEmpty()){
//     console.log(queue.pop());
// };
