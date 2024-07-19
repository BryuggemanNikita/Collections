import { BinaryTree } from "./BinaryTree";

let tree = new BinaryTree(12, "hello");
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

let treeOrigin = tree.getOrigin()

// console.log(treeOrigin.getLeft().getKey());
// console.log(treeOrigin.getKey());
// console.log(treeOrigin.getRight().getKey());
// console.log(treeOrigin.getRight().getLeft().getKey());
// console.log(treeOrigin.getRight().getRight().getKey());

// console.log(tree.search(170));
// console.log("\n")
// console.log(tree.has(10));

// tree.delete(10)
// console.log(tree.getOrigin().getLeft())
// console.log(tree.getOrigin().getRight())