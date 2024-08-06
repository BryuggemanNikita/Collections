import { Map } from "../../../Interfaces/Map/Map";
import { obj } from "../../../Nodes/ObjectLHM";

export class ArrayMap<K, V> implements Map<K, V>{

    private arrMap:obj<K, V>[] = [];

    public set(key: K, value: V): void {
        let obj = {key:key, value:value};
        if(!this.has(key)){
            this.arrMap.push(obj);
            return;
        }else{
            let arr = this.arrMap;
            arr.forEach(e =>{
                if(e.key === key){
                    e.value = value;
                    return;
                };
            });
        };
    };

    get(key: K) {
        let arr:K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        return this.arrMap[elIndex];
    };
    
    public delete(key: K) {
        let arr:K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        this.arrMap.splice(elIndex, 1);
    };

    public pop(ind: number | null = null): obj<K, V> | undefined {
        if(ind === null){
            return this.arrMap.pop();
        };
        let el = this.arrMap[ind];
        this.arrMap.splice(ind, 1);
        return el;
    };

    public has(key: K): boolean {
        let arr:K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        return (elIndex === -1) ? false : true;
    };

    clear(): void {
        this.arrMap = [];
    };

    public size(): number {
        return this.arrMap.length;
    };
    
    public getMap():object[]{
        return this.arrMap;
    };

    public isEmpty():boolean{
        return (this.arrMap.length === 0) ? true : false;
    };
};