"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.array = [];
    }
    ArrayList.prototype.append = function (value) {
        this.array.push(value);
    };
    ;
    ArrayList.prototype.appendArr = function (value) {
        var _a;
        (_a = this.array).push.apply(_a, value);
    };
    ;
    ArrayList.prototype.clear = function () {
        this.array = [];
    };
    ;
    ArrayList.prototype.count = function () {
        return this.array.length;
    };
    ;
    ArrayList.prototype.index = function (value) {
        return this.array.indexOf(value);
    };
    ;
    ArrayList.prototype.insert = function (ind, value) {
        var arr = this.array;
        var left = arr.slice(0, ind);
        var right = arr.slice(ind, arr.length);
        this.array = left.concat(value, right);
    };
    ;
    ArrayList.prototype.pop = function (ind) {
        if (ind === void 0) { ind = null; }
        if (ind === null) {
            return this.array.pop();
        }
        ;
        var el = this.array[ind];
        this.array.splice(ind, 1);
        return el;
    };
    ;
    ArrayList.prototype.has = function (value) {
        var flag = false;
        this.array.forEach(function (e) {
            if (e === value)
                flag = true;
        });
        return flag;
    };
    ;
    ArrayList.prototype.remove = function (value) {
        var indValue = this.array.indexOf(value);
        this.array.splice(indValue, 1);
    };
    ;
    ArrayList.prototype.reverse = function () {
        this.array = this.array.reverse();
    };
    ;
    ArrayList.prototype.isEmpty = function () {
        return (this.array.length == 0) ? true : false;
    };
    ;
    ArrayList.prototype.getArray = function () {
        return this.array;
    };
    ;
    return ArrayList;
}());
exports.ArrayList = ArrayList;
;
