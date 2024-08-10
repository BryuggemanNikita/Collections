import { List } from "../../../Interfaces/List/List";

export class ArrayList<T> implements List<T> {

    private array: T[] = [];

    // Insert an element to the array \ Добавление эл-та в массив
    public append(value: T): void {
        this.array.push(value);
    };

    // Insert an array to the array \ Добавление массива в массив
    public appendArr(value: T[]): void {
        this.array.push(...value);
    };

    // Clearing the array \ Очистка массива
    public clear(): void {
        this.array = [];
    };

    // The number of elements in the array \ кол-во элементов в массиве
    public count(): number {
        return this.array.length;
    };

    // The index of the element by value \ Индекс элемента по значению
    public index(value: T): number {
        return this.array.indexOf(value);
    };

    // Adding an item by index \ Добавление элемента по индексу
    public insert(ind: number, value: T): void {
        let arr = this.array;
        let left = arr.slice(0, ind);
        let right = arr.slice(ind, arr.length);
        this.array = left.concat(value, right);
    };

    // Deleting an element \ Удаление элемента
    public pop(ind: number | null = null): T | undefined {
        if (ind === null) {
            return this.array.pop();
        };
        let el = this.array[ind];
        this.array.splice(ind, 1);
        return el;
    };

    // The presence of a key in the array \ Наличие элемента с заданным ключом
    public has(value: T): boolean {
        let indexValue = this.array.indexOf(value);
        return (indexValue !== -1);
    };

    // Deleting an element by value \ Удаление элемента по значения
    public remove(value: T): void {
        let indValue = this.array.indexOf(value);
        this.array.splice(indValue, 1);
    };

    // Reverse array
    public reverse(): void {
        this.array = this.array.reverse();
    };

    // Test for empty array
    public isEmpty(): boolean {
        return (this.array.length == 0);
    };

    // Getter array
    public getArray(): T[] {
        return this.array;
    };
};