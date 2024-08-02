"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTree_1 = require("./BinaryTree");
var tree = new BinaryTree_1.BinaryTree(12, "hello");
tree.insert(17, "OverHello");
tree.insert(10, "bay");
// tree.insert(14, "miniOverHello");
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
console.log((_a = treeOrigin.getLeft()) === null || _a === void 0 ? void 0 : _a.getKey());
console.log(treeOrigin.getKey());
console.log((_b = treeOrigin.getRight()) === null || _b === void 0 ? void 0 : _b.getKey());
console.log((_d = (_c = treeOrigin.getRight()) === null || _c === void 0 ? void 0 : _c.getLeft()) === null || _d === void 0 ? void 0 : _d.getKey());
console.log((_f = (_e = treeOrigin.getRight()) === null || _e === void 0 ? void 0 : _e.getRight()) === null || _f === void 0 ? void 0 : _f.getKey());
console.log("2---------------");
// console.log(treeOrigin.getLeft());
console.log(treeOrigin);
// console.log(treeOrigin.getRight());
// console.log(treeOrigin.getRight()?.getLeft());
// console.log(treeOrigin.getRight()?.getRight());
console.log("3---------------");
// console.log(tree.search(170));
// console.log("\n")
// console.log(tree.has(10));
// console.log(tree.getOrigin());
console.log(tree.delete(17));
// console.log(tree.getOrigin().getLeft())
// console.log(tree.getOrigin().getRight())
console.log("4---------------");
treeOrigin = tree.getOrigin();
console.log(treeOrigin);
