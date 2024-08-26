import { Node } from "../../Nodes/Node";

// Binary tree. implementation of containing nodes
export class BinaryTree {
    private origin: Node | null;

    constructor(originKey?: number, originValue?) {
        this.origin = new Node(originKey, originValue);
    };

    //Getter for origin of tree \ Геттер корня дерева
    public getOrigin(): Node | null {
        return this.origin;
    };

    // Insert an element to the tree \ Добавление эл-та в дерево
    public insert(key: number, value): void {
        if (this.origin == null) {
            this.origin = new Node(key, value);
            return;
        };
        WorkerBinaryTree.insert(this.origin, key, value);
    };

    // Key search \ Поиск по ключу
    public search(key: number): Node | null {
        return WorkerBinaryTree.search(this.origin, key);
    }

    // The presence of a key in the tree \ Наличие элемента с заданным ключом
    public has(key: number): boolean {
        return this.search(key) == null ? false : true;
    };

    // Search for the maximum node in the tree starting from the specified node
    public max(): Node | null {
        return WorkerBinaryTree.max(this.origin);
    };

    // Search for the minimum node in the tree starting from the specified node
    public min(): Node | null {
        return WorkerBinaryTree.min(this.origin);
    };

    // Removing an object from the tree \ Удаление объекта из дерева
    public delete(key: number): Node | null {
        return WorkerBinaryTree.delete(this.origin, null, key);
    };
};

abstract class WorkerBinaryTree {
    // Search for the maximum node in the tree starting from the specified node
    public static max(node: Node | null): Node | null {
        if (node === null) return null;
        let rightNode = node.getRight();
        return rightNode == null ? node : WorkerBinaryTree.max(rightNode);
    };
    // Search for the minimum node in the tree starting from the specified node
    public static min(node: Node | null): Node | null {
        if (node === null) return null;
        let leftNode = node.getLeft();
        return leftNode == null ? node : WorkerBinaryTree.min(leftNode);
    };
    // Insert an element to the tree \ Добавление эл-та в дерево
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
    // Key search \ Поиск по ключу
    public static search(node: Node | null, key: number): Node | null {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) return node;
        if (node == null) return null;
        return thisKey > key ? WorkerBinaryTree.search(leftNode, key) : WorkerBinaryTree.search(rightNode, key);
    };
    // Removing an object from the tree \ Удаление объекта из дерева
    public static delete(node: Node | null, lastNode: Node | null, key: number): Node | null {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) {
            if (leftNode === null && rightNode === null) {
                let leftKey = lastNode?.getLeft()?.getKey();
                (leftKey === key) ? lastNode?.setLeft(null) : lastNode?.setRight(null);

            } else if (leftNode === null && rightNode !== null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(rightNode) : lastNode?.setRight(rightNode);

            } else if (leftNode !== null && rightNode === null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(leftNode) : lastNode?.setRight(leftNode);
            } else {
                let minRight = this.min(rightNode);
                let keyMinRight = minRight?.getKey();
                let valueMinRight = minRight?.getValue();
                this.delete(node, lastNode, keyMinRight);
                node.setKey(keyMinRight);
                node.setValue(valueMinRight);
            };

        } else {
            this.delete((thisKey >= key) ? leftNode : rightNode, node, key);
        };
        return node;
    };
};