import { Map } from "../../../Interfaces/Map/Map";
import { Node } from "../../../Nodes/Node";

export class TreeMap<K, V> implements Map<K, V> {

    private origin: Node | null = null;
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
    public get(key: K, node: Node | null = this.origin): Node | null {
        if (node === null) return null;
        let keyNode = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();
        if (key == keyNode) return node;
        return this.get(key, (key >= keyNode) ? rightNode : leftNode);
    };

    // Removing an object from the tree \ Удаление объекта из дерева
    public delete(key: K, node: Node | null = this.origin, lastNode: Node | null = null) {
        if (node === null) return null;

        let thisKey = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();

        if (thisKey === key) {
            if (leftNode === null && rightNode === null) {
                let leftKey = lastNode?.getLeft()?.getKey();
                (leftKey === key) ? lastNode?.setLeft(null) : lastNode?.setRight(null);
                this.sizeTree--;

            } else if (leftNode === null && rightNode !== null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(rightNode) : lastNode?.setRight(rightNode);
                this.sizeTree--;

            } else if (leftNode !== null && rightNode === null) {
                let leftLastNode = lastNode?.getLeft();
                (leftLastNode === node) ? lastNode?.setLeft(leftNode) : lastNode?.setRight(leftNode);
                this.sizeTree--;

            } else {
                let minRight = this.min(rightNode);
                let keyMinRight = minRight?.getKey();
                let valueMinRight = minRight?.getValue();
                this.delete(keyMinRight, node, lastNode, );
                node.setKey(keyMinRight);
                node.setValue(valueMinRight);
                this.sizeTree--;

            };

        } else {
            this.delete(key, (thisKey >= key) ? leftNode : rightNode, node);
        };
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
    public max(node: Node | null = this.origin): Node | null {
        if (node === null) return null;
        let rightNode = node.getRight();
        return rightNode == null ? node : this.max(rightNode);
    };
    // Search for the minimum node in the tree starting from the specified node
    public min(node: Node | null = this.origin): Node | null {
        if (node === null) return null;
        let leftNode = node.getLeft();
        return leftNode == null ? node : this.min(leftNode);
    };
};

// let tree = new TreeMap<number, string>();
// tree.set(12, "Nastya");
// tree.set(52, "Nikita");
// tree.set(16, "Efpatyi");
// tree.set(69, "happy");
// tree.set(5, "akaki");

// console.log(tree);

