// Node for BinaryTree, TreeMap
export class Node {
    private key;
    private value;
    private left: Node | null = null;
    private right: Node | null = null;
    
    constructor(key, value) {
        this.key = key;
        this.value = value;
    };

    public getKey() {
        return this.key;
    };

    public getValue() {
        return this.value;
    };

    public getLeft(): Node | null {
        return this.left;
    };

    public getRight(): Node | null {
        return this.right;
    };

    public setLeft(left: Node|null): void {
        this.left = left;
    };

    public setRight(right: Node|null): void {
        this.right = right;
    };

    public setKey(key){
        this.key = key;
    };

    public setValue(value){
        this.value = value;
    };

    public toString():string{
        return `${this.key.toString()}${this.value.toString()}${(this.left !== null) ? this.left.toString() : "null"}${
            (this.right !== null) ? this.right.toString() : "null"}Node`
    };
};