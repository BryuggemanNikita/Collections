"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeM = void 0;
var NodeM = /** @class */ (function () {
    function NodeM(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
    NodeM.prototype.getKey = function () {
        return this.key;
    };
    ;
    NodeM.prototype.getValue = function () {
        return this.value;
    };
    NodeM.prototype.getLeft = function () {
        return this.left;
    };
    NodeM.prototype.getRight = function () {
        return this.right;
    };
    NodeM.prototype.setLeft = function (left) {
        this.left = left;
    };
    ;
    NodeM.prototype.setRight = function (right) {
        this.right = right;
    };
    ;
    NodeM.prototype.insert = function (node, key, value) {
        var nodeSet = new NodeM(key, value);
        var thisKey = this.key;
        var thisLeft = this.left;
        var thisRight = this.right;
        //Для большего значения
        if (thisKey >= key) {
            if (thisLeft == null)
                node.setLeft(nodeSet);
            else
                node.insert(thisLeft, key, value);
        }
        ;
        //Для меньшего значения
        if (thisKey < key) {
            if (thisRight == null)
                node.setRight(nodeSet);
            else
                node.insert(thisRight, key, value);
        }
        ;
    };
    ;
    NodeM.prototype.search = function (node, key) {
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
    NodeM.prototype.getMax = function (node) {
        var rightNode = this.right;
        return rightNode == null ? node : node.getMax(rightNode);
    };
    ;
    NodeM.prototype.delete = function (node, key) {
        if (node == null)
            return null;
        var thisKey = this.key;
        var leftNode = this.left;
        var rightNode = this.right;
        if (thisKey > node.key)
            leftNode = node.delete(leftNode, key);
        else if (thisKey < node.key)
            rightNode = node.delete(rightNode, key);
        else {
            if (rightNode == null || leftNode == null) {
                node = (rightNode == null) ? rightNode : leftNode;
            }
            else {
                var nodeMax = node.getMax(leftNode);
                node.key = nodeMax.getKey();
                node.value = nodeMax.getValue();
                node.right = node.delete(rightNode, nodeMax.key);
            }
            ;
        }
        return thisKey < key ? node.delete(rightNode, key) : node.delete(leftNode, key);
        // return node;
    };
    ;
    return NodeM;
}());
exports.NodeM = NodeM;
;
