"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTree_1 = require("./BinaryTree");
var tree = new BinaryTree_1.BinaryTree(12, "hello");
tree.insert(17, "OverHello");
tree.insert(10, "bay");
tree.insert(14, "miniOverHello");
tree.insert(19, "BIGOverHello");
// tree.insert(21, "dfger");
// tree.insert(18, "BIGOverHerheello");
// console.log(tree.getLeft().getValue());
// console.log(1)
// // console.log(tree.getRight().getLeft());
// console.log(2)
// console.log(tree.getValue());
// console.log(3)
// console.log(tree.getRight().getRight());
// console.log(4)
var treeOrigin = tree.getOrigin();
// console.log(treeOrigin.getLeft().getKey());
// console.log(treeOrigin.getKey());
// console.log(treeOrigin.getRight().getKey());
// console.log(treeOrigin.getRight().getLeft().getKey());
// console.log(treeOrigin.getRight().getRight().getKey());
// console.log(tree.search(170));
// console.log("\n")
// console.log(tree.has(10));
tree.delete(17);
console.log(tree.getOrigin().getLeft());
console.log(tree.getOrigin().getRight());
