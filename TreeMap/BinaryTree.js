"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var Node_1 = require("../Collections/Nodes/Node");
// Binary tree. implementation of containing nodes
var BinaryTree = /** @class */ (function () {
    function BinaryTree(originKey, originValue) {
        this.origin = new Node_1.Node(originKey, originValue);
    }
    ;
    //  Getter for origin of tree \ Геттер корня дерева
    BinaryTree.prototype.getOrigin = function () {
        return this.origin;
    };
    // insert an element to the tree \ Добавление эл-та в дерево
    BinaryTree.prototype.insert = function (key, value) {
        WorkerBinaryTree.insert(this.origin, key, value);
    };
    ;
    // key search \ Поиск по ключу
    BinaryTree.prototype.search = function (key) {
        return this.origin.search(this.origin, key);
    };
    // the presence of a key in the tree \ Наличие элемента с заданным ключом
    BinaryTree.prototype.has = function (key) {
        return this.search(key) == null ? false : true;
    };
    ;
    BinaryTree.prototype.max = function () {
        return WorkerBinaryTree.max(this.origin);
    };
    ;
    // search for the maximum node in the tree starting from the specified node
    BinaryTree.prototype.delete = function (key) {
        return BinaryTree.delete(this.origin, key);
    };
    ;
    BinaryTree.delete = function (node, key) {
        if (node === null)
            return null;
        var thisKey = node.getKey();
        var leftNode = node.getLeft();
        var rightNode = node.getRight();
        if (thisKey !== key) {
            node = BinaryTree.delete(key >= thisKey ? rightNode : leftNode, key);
        }
        else {
            var maxLeft = WorkerBinaryTree.max(node.getLeft());
            console.log("---");
            console.log(maxLeft);
            console.log("---");
            if (maxLeft == null) {
                node.setRight(node.getRight());
            }
            ;
        }
        ;
        return node;
    };
    ;
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
;
var WorkerBinaryTree = /** @class */ (function () {
    function WorkerBinaryTree() {
    }
    WorkerBinaryTree.max = function (node) {
        if (node === null)
            return null;
        var rightNode = node.getRight();
        return rightNode == null ? node : WorkerBinaryTree.max(rightNode);
    };
    ;
    WorkerBinaryTree.insert = function (node, key, value) {
        var nodeSet = new Node_1.Node(key, value);
        var thisKey = node.getKey();
        var thisLeft = node.getLeft();
        var thisRight = node.getRight();
        //For a larger value \ Для большего значения
        if (thisKey >= key) {
            if (thisLeft == null)
                node.setLeft(nodeSet);
            else
                WorkerBinaryTree.insert(thisLeft, key, value);
        }
        ;
        //To get a lower value \ Для меньшего значения
        if (thisKey < key) {
            if (thisRight == null)
                node.setRight(nodeSet);
            else
                WorkerBinaryTree.insert(thisRight, key, value);
        }
        ;
    };
    ;
    return WorkerBinaryTree;
}());
;
