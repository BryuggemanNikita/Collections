import { Node } from "../../Nodes/Node";

// Binary tree. implementation of containing nodes
export class BinaryTree {
    private origin: Node | null;

    constructor(originKey: number, originValue) {
        this.origin = new Node(originKey, originValue);
    };

    //Getter for origin of tree \ Геттер корня дерева
    public getOrigin(): Node | null {
        return this.origin;
    };

    // insert an element to the tree \ Добавление эл-та в дерево
    public insert(key: number, value): void {
        if (this.origin == null) {
            this.origin = new Node(key, value);
        };
        WorkerBinaryTree.insert(this.origin, key, value);
    };

    // key search \ Поиск по ключу
    public search(key: number): Node | null {
        return WorkerBinaryTree.search(this.origin, key);
    }

    // the presence of a key in the tree \ Наличие элемента с заданным ключом
    public has(key: number): boolean {
        return this.search(key) == null ? false : true;
    };

    // search for the maximum node in the tree starting from the specified node
    public max(): Node | null {
        return WorkerBinaryTree.max(this.origin);
    };

    // search for the minimum node in the tree starting from the specified node
    public min(): Node | null {
        return WorkerBinaryTree.min(this.origin);
    };

    public delete(key: number): Node | null {
        if (this.origin === null) return null;
        if (this.origin.getKey() == key) {
            let ret = this.origin;
            this.origin = null;
            return ret;
        };
        return WorkerBinaryTree.delete(this.origin, key);
    };

};

abstract class WorkerBinaryTree {

    public static max(node: Node | null): Node | null {
        if (node === null) return null;
        let rightNode = node.getRight();
        return rightNode == null ? node : WorkerBinaryTree.max(rightNode);
    };

    public static min(node: Node | null): Node | null {
        if (node === null) return null;
        let leftNode = node.getLeft();
        return leftNode == null ? node : WorkerBinaryTree.min(leftNode);
    };

    public static insert(node: Node, key: number, value): void {
        let nodeSet = new Node(key, value)
        let thisKey = node.getKey();
        let thisLeft = node.getLeft();
        let thisRight = node.getRight();

        //For a larger value \ Для большего значения
        if (thisKey >= key) {
            if (thisLeft == null) node.setLeft(nodeSet);
            else WorkerBinaryTree.insert(thisLeft, key, value)
        };

        //To get a lower value \ Для меньшего значения
        if (thisKey < key) {
            if (thisRight == null) node.setRight(nodeSet);
            else WorkerBinaryTree.insert(thisRight, key, value)
        };
    };

    public static search(node: Node | null, key: number): Node | null {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) return node;
        if (node == null) return null;
        return thisKey > key ? WorkerBinaryTree.search(leftNode, key) : WorkerBinaryTree.search(rightNode, key);
    };

    public static delete(node: Node | null, key: number): Node | null {
        if(node === null) return null;

        // let prevNode:Node;
        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey == key) {
            let ret:Node = node;
            if(leftNode == null){
                // node.setKey()
            }

            // console.log(prevNode)
        } else {
            // prevNode = node;
            this.delete((thisKey >= key) ? leftNode : rightNode, key);
        };

        return node;
    };
};