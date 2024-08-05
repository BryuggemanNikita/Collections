import { List } from "../../../Interfaces/List/List";

export class ArrayList<T> implements List {

    private array: T[] = [];

    public append(value: T): void {
        this.array.push(value);
    };

    public appendArr(value: T[]): void {
        this.array.push(...value);
    };

    public clear(): void {
        this.array = [];
    };

    public count(): number {
        return this.array.length
    };

    public index(value: T): number {
        return this.array.indexOf(value);
    };

    public insert(ind: number, value: T): void {
        let arr = this.array;
        let left = arr.slice(0, ind);
        let right = arr.slice(ind, arr.length);
        this.array = left.concat(value, right);
    };

    public pop(ind: number | null = null): T | undefined {
        if (ind === null) {
            return this.array.pop();
        };
        let el = this.array[ind];
        this.array.splice(ind, 1);
        return el;
    };

    public has(value: T): boolean {
        let flag: boolean = false;
        this.array.forEach(e => {
            if (e === value) flag = true;
        });
        return flag;
    };

    public remove(value: T): void {
        let indValue = this.array.indexOf(value);
        this.array.splice(indValue, 1);
    };

    public reverse(): void {
        this.array = this.array.reverse();
    };

    public isEmpty(): boolean {
        return (this.array.length == 0) ? true : false
    };

    public getArray(): T[] {
        return this.array;
    };
};