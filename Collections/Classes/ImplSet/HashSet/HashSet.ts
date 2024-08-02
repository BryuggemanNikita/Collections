import { Set } from "../../../Interfaces/Set/Set";

export class HashSet<T> implements Set<T> {
    private set: T[] = [];

    public add(value: T): void {
        if (this.has(value)) return;
        this.set.push(value);
    };

    public clear(): void {
        this.set = [];
    };

    delete(value: T): boolean {
        let indexValue = this.set.indexOf(value);
        if (indexValue == -1) return false;
        this.set.splice(indexValue, 1);
        return true;
    };

    public entries() {
        console.log("Method entries not implemented.");
    };

    public has(value: T): boolean {
        let flag: boolean = false;
        this.set.forEach(e => {
            if (e === value) flag = true;
        });
        return flag;
    };

    public size(): number {
        return this.set.length;
    };

    public getSet(): T[] {
        return this.set;
    };
};