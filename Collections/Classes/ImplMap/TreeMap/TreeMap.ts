import { Map } from "../../../Interfaces/Map/Map";

export class TreeMap<K, V> implements Map<K, V>{
    
    set(key: K, value: V): void {
        throw new Error("Method not implemented.");
    }
    get(key: K) {
        throw new Error("Method not implemented.");
    }
    delete(key: K) {
        throw new Error("Method not implemented.");
    }
    has(key: K): boolean {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }  
};

