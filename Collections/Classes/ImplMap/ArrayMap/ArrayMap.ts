import { Map } from "../../../Interfaces/Map/Map";
import { obj } from "../../../Nodes/ObjectLHM";

export class ArrayMap<K, V> implements Map<K, V> {

    private arrMap: obj<K, V>[] = [];

    // Insert or changing an element in array
    public set(key: K, value: V): void {
        if (!this.has(key)) {
            let obj: obj<K, V> = { key: key, value: value };
            this.arrMap.push(obj);
            return;
        } else {
            let arr: obj<K, V>[] = this.arrMap;
            arr.forEach(e => {
                if (e.key === key) {
                    e.value = value;
                    return;
                };
            });
        };
    };

    // Getter element with key
    public get(key: K) {
        let arr: K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        return this.arrMap[elIndex];
    };

    // Removing an element from the ArrayMap for key \ Удаление элемента из массива по ключу
    public delete(key: K) {
        let arr: K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        this.arrMap.splice(elIndex, 1);
    };

    // Removing an element from the ArrayMap for index \ Удаление элемента из массива по индексу
    public pop(ind: number | null = null): obj<K, V> | undefined {
        if(this.size() == 0) return undefined;
        if (ind === null) {
            return this.arrMap.pop();
        };
        let el: obj<K, V> = this.arrMap[ind];
        this.arrMap.splice(ind, 1);
        return el;
    };

    // Test by array has an element
    public has(key: K): boolean {
        let arr: K[] = this.arrMap.map((e) => e.key);
        let elIndex = arr.indexOf(key);
        return (elIndex !== -1);
    };

    // Clear array
    public clear(): void {
        this.arrMap = [];
    };

    // Getter length of array
    public size(): number {
        return this.arrMap.length;
    };

    // Test for empty array
    public isEmpty(): boolean {
        return (this.arrMap.length === 0);
    };

    // Getter this array
    public getArray(): obj<K, V>[] {
        return this.arrMap;
    };
};