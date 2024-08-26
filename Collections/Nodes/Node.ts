// Node for BinaryTree, TreeMap
export class Node<K, V> {
    private key: K;
    private value: V;
    private left: Node<K, V> | null = null;
    private right: Node<K, V> | null = null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    };

    public getKey(): K {
        return this.key;
    };

    public getValue(): V {
        return this.value;
    };

    public getLeft(): Node<K, V> | null {
        return this.left;
    };

    public getRight(): Node<K, V> | null {
        return this.right;
    };

    public setLeft(left: Node<K, V> | null): void {
        this.left = left;
    };

    public setRight(right: Node<K, V> | null): void {
        this.right = right;
    };

    public setKey(key: K): void {
        this.key = key;
    };

    public setValue(value: V): void {
        this.value = value;
    };

    public toString(): string {
        return `${(this.key?.toString())}${this.value?.toString()}${(this.left !== null) ? this.left.toString() : "null"}${(this.right !== null) ? this.right.toString() : "null"}Node`
    };
};
// .toString()