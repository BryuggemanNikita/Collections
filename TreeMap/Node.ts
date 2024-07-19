export class NodeM {
    private key: number;
    private value;
    private left;
    private right;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    };

    getKey(): number {
        return this.key;
    };
    getValue() {
        return this.value;
    }
    getLeft(): NodeM {
        return this.left;
    }
    getRight(): NodeM {
        return this.right;
    }

    setLeft(left: NodeM): void {
        this.left = left;
    };

    setRight(right: NodeM): void {
        this.right = right;
    };

    public insert(node: NodeM, key: number, value): void {
        let nodeSet = new NodeM(key, value)
        let thisKey = this.key;
        let thisLeft = this.left;
        let thisRight = this.right;

        //Для большего значения
        if (thisKey >= key) {
            if (thisLeft == null) node.setLeft(nodeSet);
            else node.insert(thisLeft, key, value)
        };

        //Для меньшего значения
        if (thisKey < key) {
            if (thisRight == null) node.setRight(nodeSet);
            else node.insert(thisRight, key, value)
        };
    };

    public search(node: NodeM, key: number): NodeM | null {
        let thisKey = this.key;
        let leftNode = this.left;
        let rightNode = this.right;

        if (thisKey === key) return node;
        if (node == null) return null;
        return thisKey > key ? node.search(leftNode, key) : node.search(rightNode, key);
    };

    public getMax(node: NodeM): NodeM {
        let rightNode = this.right;
        return rightNode == null ? node : node.getMax(rightNode);
    };

    public delete(node: NodeM, key: number): NodeM | null {
        if (node == null) return null;
        let thisKey = this.key;
        let leftNode = this.left;
        let rightNode = this.right;
        if(thisKey > node.key) leftNode = node.delete(leftNode, key);
        else if(thisKey < node.key) rightNode = node.delete(rightNode, key);
        else{
            if (rightNode == null || leftNode == null) {
                node = (rightNode == null) ? rightNode : leftNode;
            }
            else{
                let nodeMax:NodeM = node.getMax(leftNode);
                node.key = nodeMax.getKey()
                node.value = nodeMax.getValue();
                node.right = node.delete(rightNode, nodeMax.key)
            };
        }
        return thisKey < key ? node.delete(rightNode, key) : node.delete(leftNode, key)
        // return node;
    };
};