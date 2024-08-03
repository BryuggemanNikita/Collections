import { Map } from "../../../Interfaces/Map/Map";
import { Node } from "../../../Nodes/Node";

export class TreeMap<K, V> implements Map<K, V> {

    private origin: Node | null = null;
    private sizeTree: number = 0;

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

    public get(key: K, node: Node | null = this.origin): Node | null {
        if (node === null) return null;
        let keyNode = node.getKey();
        let leftNode = node.getLeft();
        let rightNode = node.getRight();
        if (key == keyNode) return node;
        return this.get(key, (key >= keyNode) ? rightNode : leftNode);
    };

    delete(key: K) {
        throw new Error("Method not implemented.");
    };

    public has(key: K): boolean {
        if (this.get(key) == null) {
            return false;
        };
        return true;
    };

    public clear(): void {
        this.origin = null;
    };

    public size(): number {
        return this.sizeTree;
    };
};

// let tMap = new TreeMap();
// tMap.set(12, 1234);
// tMap.set(6, 132);
// tMap.set(14, "Hello");
// tMap.set(13, "bb");
// tMap.set(14, "Sup");
// console.log(tMap);