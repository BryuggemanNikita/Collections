// Node for BinaryTree
export class Node {
    private key: number;
    private value;
    private left: Node | null = null;
    private right: Node | null = null;
    
    constructor(key:number, value) {
        this.key = key;
        this.value = value;
    };

    public getKey(): number {
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

    public setKey(key:number){
        this.key = key;
    };

    public setValue(value){
        this.value = value;
    };
};