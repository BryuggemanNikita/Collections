import { Node } from "../../Nodes/Node";

// Binary tree. implementation of containing nodes
export class BinaryTree<K extends number, V> {
    private origin: Node<K, V> | null;

    //Getter for origin of tree \ Геттер корня дерева
    public getOrigin(): Node<K, V> | null {
        return this.origin;
    };

    // Insert an element to the tree \ Добавление эл-та в дерево
    public insert(key: K, value: V): void {
        if (this.origin == null) {
            this.origin = new Node<K, V>(key, value);
            return;
        };
        WorkerBinaryTree.insert<K, V>(this.origin, key, value);
    };

    // Key search \ Поиск по ключу
    public search(key: K): Node<K, V> | null {
        return WorkerBinaryTree.search<K, V>(this.origin, key);
    }

    // The presence of a key in the tree \ Наличие элемента с заданным ключом
    public has(key: K): boolean {
        return this.search(key) == null ? false : true;
    };

    // Search for the maximum node in the tree starting from the specified node
    public max(): Node<K, V> | null {
        return WorkerBinaryTree.max<K, V>(this.origin);
    };

    // Search for the minimum node in the tree starting from the specified node
    public min(): Node<K, V> | null {
        return WorkerBinaryTree.min<K, V>(this.origin);
    };

    // Removing an object from the tree \ Удаление объекта из дерева
    public delete(key: K): Node<K, V> | null {
        let origin = this.origin;
        if (origin == null) return null;
        let originKey = origin.getKey();
        let left = origin.getLeft();
        let right = origin.getRight();
        if (originKey == key) {
            if (left === null && right === null) {
                this.origin = null;
            } else if (right !== null) {
                let minRight = WorkerBinaryTree.min(right)
                if (minRight === null) return null;
                let keyMinRight = minRight.getKey();
                let valueMinRight = minRight.getValue();
                this.delete(keyMinRight);
                origin.setKey(keyMinRight);
                origin.setValue(valueMinRight);
            } else {
                let maxLeft = WorkerBinaryTree.max(left)
                if (maxLeft === null) return null;
                let keyMaxLeft = maxLeft.getKey();
                let valueMaxLeft = maxLeft.getValue();
                this.delete(keyMaxLeft);
                origin.setKey(keyMaxLeft);
                origin.setValue(valueMaxLeft);
            };
            return origin;
        };
        return WorkerBinaryTree.delete<K, V>(origin, origin, key);
    };
};

abstract class WorkerBinaryTree<K, V> {
    // Search for the maximum node in the tree starting from the specified node
    public static max<K extends number, V>(node: Node<K, V> | null): Node<K, V> | null {
        if (node === null) return null;
        let rightNode = node.getRight();
        return rightNode == null ? node : WorkerBinaryTree.max(rightNode);
    };
    // Search for the minimum node in the tree starting from the specified node
    public static min<K, V>(node: Node<K, V> | null): Node<K, V> | null {
        if (node === null) return null;
        let leftNode = node.getLeft();
        return leftNode == null ? node : WorkerBinaryTree.min(leftNode);
    };
    // Insert an element to the tree \ Добавление эл-та в дерево
    public static insert<K, V>(node: Node<K, V>, key: K, value): void {
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
    public static search<K, V>(node: Node<K, V> | null, key: K): Node<K, V> | null {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) return node;
        if (node == null) return null;
        return thisKey > key ? WorkerBinaryTree.search(leftNode, key) : WorkerBinaryTree.search(rightNode, key);
    };
    // Removing an object from the tree \ Удаление объекта из дерева
    public static delete<K, V>(node: Node<K, V> | null, lastNode: Node<K, V>, key: K): Node<K, V> | null {
        if (node === null) return null;
        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) {
            if (leftNode === null && rightNode === null) {
                let left = lastNode.getLeft();
                (left !== null && left.getKey() === key) ? lastNode.setLeft(null) : lastNode.setRight(null);

            } else if (leftNode === null && rightNode !== null) {
                let leftLastNode = lastNode.getLeft();
                (leftLastNode === node) ? lastNode.setLeft(rightNode) : lastNode.setRight(rightNode);

            } else if (leftNode !== null && rightNode === null) {
                let leftLastNode = lastNode.getLeft();
                (leftLastNode === node) ? lastNode.setLeft(leftNode) : lastNode.setRight(leftNode);
            } else {
                let minRight = this.min(rightNode);
                if (minRight === null) return null;
                let keyMinRight = minRight.getKey();
                let valueMinRight = minRight.getValue();
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