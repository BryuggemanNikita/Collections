import { Map } from "../../../Interfaces/Map/Map";
import { Node } from "../../../Nodes/Node";

export class TreeMap<K, V> implements Map<K, V> {

    private origin: Node<K, V> | null = null;
    private sizeTree: number = 0;

    // Insert an element to the tree \ Добавление эл-та в дерево
    public set(key: K, value: V): void {
        if (this.origin === null) {
            this.origin = new Node(key, value);
            this.sizeTree++;
            return
        };
        let keyInTree = this.get(key);
        if (keyInTree !== null) {
            keyInTree.setValue(value);
        } else {
            let node = this.origin;
            let leftNode = node.getLeft();
            let rightNode = node.getRight();
            let setNode = (key >= node.getKey() ? rightNode : leftNode);
            while (setNode !== null) {
                node = setNode;
                leftNode = node.getLeft();
                rightNode = node.getRight();
                setNode = (key >= node.getKey() ? rightNode : leftNode);
            };
            let newNode = new Node(key, value);
            this.sizeTree++;
            if (key >= node.getKey()) node.setRight(newNode)
            if (key < node.getKey()) node.setLeft(newNode)
        };
    };

    // Getter
    public get(key: K, node: Node<K, V> | null = this.origin): Node<K, V> | null {
        if (node === null) return null;
        let keyNode = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();
        if (key == keyNode) return node;
        return this.get(key, (key >= keyNode) ? rightNode : leftNode);
    };

    // Removing an object from the tree \ Удаление объекта из дерева
    public delete(key: K, node: Node<K, V> | null = this.origin, lastNode: Node<K, V> | null = null) {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) {
            if (lastNode == null) {
                let origin = this.origin

                if (leftNode === null && rightNode === null) {
                    this.origin = null;

                } else if (rightNode !== null) {
                    let minRight = this.min(rightNode)
                    if (minRight === null) return null;
                    let keyMinRight = minRight.getKey();
                    let valueMinRight = minRight.getValue();
                    this.delete(keyMinRight);
                    origin?.setKey(keyMinRight);
                    origin?.setValue(valueMinRight);

                } else {
                    let maxLeft = this.max(leftNode)
                    if (maxLeft === null) return null;
                    let keyMaxLeft = maxLeft.getKey();
                    let valueMaxLeft = maxLeft.getValue();
                    this.delete(keyMaxLeft);
                    origin?.setKey(keyMaxLeft);
                    origin?.setValue(valueMaxLeft);
                };

            } else if (leftNode === null && rightNode === null) {
                let leftKey = lastNode?.getLeft()?.getKey();
                (leftKey === key) ? lastNode?.setLeft(null) : lastNode?.setRight(null);

            } else if (leftNode === null && rightNode !== null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(rightNode) : lastNode?.setRight(rightNode);

            } else if (leftNode !== null && rightNode === null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(leftNode) : lastNode?.setRight(leftNode);

            } else {
                let minRight = this.min(rightNode)
                if (minRight === null) return null;
                let keyMinRight = minRight?.getKey();
                let valueMinRight = minRight?.getValue();
                this.delete(keyMinRight, node, lastNode,);
                node.setKey(keyMinRight);
                node.setValue(valueMinRight);

            };

        } else {
            this.delete(key, (thisKey >= key) ? leftNode : rightNode, node);
        };
        this.sizeTree--;
        return node;
    };

    // The presence of a key in the tree \ Наличие элемента с заданным ключом
    public has(key: K): boolean {
        if (this.get(key) == null) {
            return false;
        };
        return true;
    };

    // Clearing the tree \ Очистка дерева
    public clear(): void {
        this.origin = null;
    };

    // Getter sizeTree
    public size(): number {
        return this.sizeTree;
    };

    // Search for the maximum node in the tree starting from the specified node
    public max(node: Node<K, V> | null = this.origin): Node<K, V> | null {
        if (node === null) return null;
        let rightNode = node.getRight();
        return rightNode == null ? node : this.max(rightNode);
    };
    // Search for the minimum node in the tree starting from the specified node
    public min(node: Node<K, V> | null = this.origin): Node<K, V> | null {
        if (node === null) return null;
        let leftNode = node.getLeft();
        return leftNode == null ? node : this.min(leftNode);
    };
};