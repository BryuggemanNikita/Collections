"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
// Node for BinaryTree
var Node = /** @class */ (function () {
    function Node(key, value) {
        this.left = null;
        this.right = null;
        this.key = key;
        this.value = value;
    }
    ;
    Node.prototype.getKey = function () {
        return this.key;
    };
    ;
    Node.prototype.getValue = function () {
        return this.value;
    };
    Node.prototype.getLeft = function () {
        return this.left;
    };
    Node.prototype.getRight = function () {
        return this.right;
    };
    Node.prototype.setLeft = function (left) {
        this.left = left;
    };
    ;
    Node.prototype.setRight = function (right) {
        this.right = right;
    };
    ;
    // key search \ Поиск по ключу начиная с заданного узла
    Node.prototype.search = function (node, key) {
        if (node === null)
            return null;
        var thisKey = this.key;
        var leftNode = this.left;
        var rightNode = this.right;
        if (thisKey === key)
            return node;
        if (node == null)
            return null;
        return thisKey > key ? node.search(leftNode, key) : node.search(rightNode, key);
    };
    ;
    // search for the minimum node in the tree starting from the specified node
    Node.prototype.getMin = function (node) {
        var leftNode = this.left;
        return leftNode == null ? node : node.getMin(leftNode);
    };
    ;
    return Node;
}());
exports.Node = Node;
;
