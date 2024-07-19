export class QueueArr<T> {
    private arr: T[] = [];

    public append(value: T): void {
        this.arr.push(value);
    };

    public pop() {
        return (this.arr.shift());
    };

    public isEmpty(): boolean {
        return (this.arr.length === 0) ? true : false;
    };

    public extend(values:T[]):void{
        this.arr.push(...values);
    };

    public clear():void{
        this.arr = [];
    };
};

let queue = new QueueArr();

queue.extend(["h", "e", "l", "l", "o", " "]);
queue.append("W");
queue.append("r");
queue.append("l");
queue.append("d");

while(!queue.isEmpty()){
    console.log(queue.pop());
};
