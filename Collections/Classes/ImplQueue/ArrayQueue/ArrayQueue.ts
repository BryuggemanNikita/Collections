import { Queue } from "../../../Interfaces/Queue/Queue";

export class ArrayQueue<T> implements Queue<T> {
    private arr: T[] = [];

    public append(value: T): void {
        this.arr.push(value);
    };

    public pop():T|undefined {
        return (this.arr.shift());
    };

    public isEmpty(): boolean {
        return (this.arr.length === 0);
    };

    public extend(values:T[]):void{
        this.arr.push(...values);
    };

    public clear():void{
        this.arr = [];
    };

    public size():number{
        return this.arr.length;
    };
};

// let queue = new ArrayQueue();

// queue.extend(["h", "e", "l", "l", "o", " "]);
// queue.append("W");
// queue.append("r");
// queue.append("l");
// queue.append("d");

// while(!queue.isEmpty()){
//     console.log(queue.pop());
// };