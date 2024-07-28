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

    public insert(ind: number, value: T) {
        let arr = this.array;
        let left = arr.slice(0, ind);
        let right = arr.slice(ind, arr.length);

        this.array = left.concat(value, right);
    };

    public pop(ind: number) {
        this.array.splice(ind, 1);
    };

    public remove(value: T) {
        let indValue = this.array.indexOf(value);
        this.array.splice(indValue, 1);
    };

    public reverse(): void {
        this.array = this.array.reverse();
    };

    public getArray():T[]{
        return this.array;
    }
};