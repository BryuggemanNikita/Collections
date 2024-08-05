"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMap = void 0;
var ArrayMap = /** @class */ (function () {
    function ArrayMap() {
        this.arrMap = [];
    }
    ArrayMap.prototype.set = function (key, value) {
        var obj = { key: key, value: value };
        if (!this.has(key)) {
            this.arrMap.push(obj);
            return;
        }
        else {
            var arr = this.arrMap;
            arr.forEach(function (e) {
                if (e.key === key) {
                    e.value = value;
                    return;
                }
                ;
            });
        }
        ;
    };
    ;
    ArrayMap.prototype.get = function (key) {
        var arr = this.arrMap.map(function (e) { return e.key; });
        var elIndex = arr.indexOf(key);
        return this.arrMap[elIndex];
    };
    ;
    ArrayMap.prototype.delete = function (key) {
        var arr = this.arrMap.map(function (e) { return e.key; });
        var elIndex = arr.indexOf(key);
        this.arrMap.splice(elIndex, 1);
    };
    ;
    ArrayMap.prototype.pop = function (ind) {
        if (ind === void 0) { ind = null; }
        if (ind === null) {
            return this.arrMap.pop();
        }
        ;
        var el = this.arrMap[ind];
        this.arrMap.splice(ind, 1);
        return el;
    };
    ;
    ArrayMap.prototype.has = function (key) {
        var arr = this.arrMap.map(function (e) { return e.key; });
        var elIndex = arr.indexOf(key);
        return (elIndex === -1) ? false : true;
    };
    ;
    ArrayMap.prototype.clear = function () {
        this.arrMap = [];
    };
    ;
    ArrayMap.prototype.size = function () {
        return this.arrMap.length;
    };
    ;
    ArrayMap.prototype.getMap = function () {
        return this.arrMap;
    };
    ;
    ArrayMap.prototype.isEmpty = function () {
        return (this.arrMap.length === 0) ? true : false;
    };
    ;
    return ArrayMap;
}());
exports.ArrayMap = ArrayMap;
;
