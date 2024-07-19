import { NodeT } from "./Node";

// Binary tree. implementation of containing nodes
 export class BinaryTree{
    private origin:NodeT;

    constructor(originKey:number, originValue){
        this.origin = new NodeT(originKey, originValue);
    };
    
    //  Getter for origin of tree \ Геттер корня дерева
    public getOrigin():NodeT{
        return this.origin;
    }

    // insert an element to the tree \ Добавление эл-та в дерево
    public insert(key:number, value):void{
        this.origin.insert(this.origin, key, value);
    };
    
    // key search \ Поиск по ключу
    public search(key:number):NodeT | null{
        return this.origin.search(this.origin, key);
    }

    // the presence of a key in the tree \ Наличие элемента с заданным ключом
    public has(key:number):boolean{
        return this.search(key) == null ? false : true;
    };

    public delete(key:number){
        return this.origin.delete(this.origin, key);
    }
};