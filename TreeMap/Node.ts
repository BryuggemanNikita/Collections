// Node for BinaryTree
export class NodeT {
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
    getLeft(): NodeT {
        return this.left;
    }
    getRight(): NodeT {
        return this.right;
    }

    setLeft(left: NodeT): void {
        this.left = left;
    };

    setRight(right: NodeT): void {
        this.right = right;
    };

    // insert an element to the tree \ добавление эл-та в дерево
    public insert(node: NodeT, key: number, value): void {
        let nodeSet = new NodeT(key, value)
        let thisKey = this.key;
        let thisLeft = this.left;
        let thisRight = this.right;

        //For a larger value \ Для большего значения
        if (thisKey >= key) {
            if (thisLeft == null) node.setLeft(nodeSet);
            else node.insert(thisLeft, key, value)
        };

        //To get a lower value \ Для меньшего значения
        if (thisKey < key) {
            if (thisRight == null) node.setRight(nodeSet);
            else node.insert(thisRight, key, value)
        };
    };

    // key search \ Поиск по ключу начиная с заданного узла
    public search(node: NodeT, key: number): NodeT | null {
        let thisKey = this.key;
        let leftNode = this.left;
        let rightNode = this.right;

        if (thisKey === key) return node;
        if (node == null) return null;
        return thisKey > key ? node.search(leftNode, key) : node.search(rightNode, key);
    };

    // search for the maximum node in the tree starting from the specified node
    public getMax(node: NodeT): NodeT {
        let rightNode = this.right;
        return rightNode == null ? node : node.getMax(rightNode);
    };

    // search for the minimum node in the tree starting from the specified node
    public getMin(node: NodeT): NodeT {
        let leftNode = this.left;
        return leftNode == null ? node : node.getMin(leftNode);
    };

    // doesn't work
    public delete(node: NodeT, key: number): NodeT | null {
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
                let nodeMax:NodeT = node.getMax(leftNode);
                node.key = nodeMax.getKey()
                node.value = nodeMax.getValue();
                node.right = node.delete(rightNode, nodeMax.key)
            };
        }
        return thisKey < key ? node.delete(rightNode, key) : node.delete(leftNode, key)
        // return node;
    };
};