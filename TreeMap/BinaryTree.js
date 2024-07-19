"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var Node_1 = require("./Node");
var BinaryTree = /** @class */ (function () {
    function BinaryTree(originKey, originValue) {
        this.origin = new Node_1.NodeM(originKey, originValue);
    }
    ;
    BinaryTree.prototype.getOrigin = function () {
        return this.origin;
    };
    BinaryTree.prototype.insert = function (key, value) {
        this.origin.insert(this.origin, key, value);
    };
    ;
    BinaryTree.prototype.search = function (key) {
        return this.origin.search(this.origin, key);
    };
    BinaryTree.prototype.has = function (key) {
        return this.search(key) == null ? false : true;
    };
    ;
    BinaryTree.prototype.delete = function (key) {
        return this.origin.delete(this.origin, key);
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
;
