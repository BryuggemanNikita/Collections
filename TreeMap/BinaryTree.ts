import { NodeM } from "./Node";

 export class BinaryTree{
    private origin:NodeM;

    constructor(originKey:number, originValue){
        this.origin = new NodeM(originKey, originValue);
    };

    public getOrigin():NodeM{
        return this.origin;
    }

    public insert(key:number, value):void{
        this.origin.insert(this.origin, key, value);
    };
    
    public search(key:number):NodeM | null{
        return this.origin.search(this.origin, key);
    }

    public has(key:number):boolean{
        return this.search(key) == null ? false : true;
    };

    public delete(key:number){
        return this.origin.delete(this.origin, key);
    }
};