import {Deque} from "../../../Interfaces/Deque/Deque";

export class ArrayDeque<T> implements Deque<T> {
    private arr: T[] = [];

    public appendFirst(value: T): void {
        this.arr.unshift(value);
    };

    public append(value: T): void {
        this.arr.push(value);
    };

    public popFirst() {
        return (this.arr.shift());
    };

    public pop() {
        return (this.arr.pop());
    };

    public isEmpty(): boolean {
        return this.arr.length === 0;
    };

    public extendFirst(values: T[]): void {
        this.arr.unshift(...values);
    };

    public extend(values: T[]): void {
        this.arr.push(...values);
    };

    public clear(): void {
        this.arr = [];
    };

    public has(value:T):boolean{
        let lengthArr:number = this.arr.length;
        let thisArr = this.arr;
        for(let i = 0; i < lengthArr; i++){
            if(thisArr[i] === value) return true
        };
        return false;
    };
};

let arrDeque = new ArrayDeque();

arrDeque.extend(["l", "l", "o", " "]);
arrDeque.extendFirst(["e", "l"]);
arrDeque.appendFirst("H");
arrDeque.append("w");
arrDeque.append("r");
arrDeque.append("l");
arrDeque.append("d");

console.log(arrDeque)
console.log(arrDeque.has("w"))

console.log(arrDeque.has("0"))

while(!arrDeque.isEmpty()){
    console.log(arrDeque.popFirst());
};