export class DequeArr<T> {
    private arr: T[] = [];

    public append(value: T): void {
        this.arr.push(value);
    };

    public appendLeft(value: T): void {
        this.arr.unshift(value);
    };

    public pop(){
        return (this.arr.shift());
    };

    public popLeft() {
        return (this.arr.pop());
    };

    public isEmpty(): boolean {
        return (this.arr.length === 0) ? true : false;
    };

    public extend(values:T[]):void{
        this.arr.push(...values);
    };

    public extendLeft(values:T[]):void{
        this.arr.unshift(...values);
    };
    
    public clear():void{
        this.arr = [];
    };

};