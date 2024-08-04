//Element for LinkedList
export class LinkedListElement {
    private value;
    private next: LinkedListElement | null;
    private prev: LinkedListElement | null;

    constructor(value = null, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };

    public getValue() {
        return this.value;
    };

    public getNext(): LinkedListElement | null {
        if (this.next !== null) {
            return this.next;
        };
        return null;
    };

    public getPrev(): LinkedListElement | null {
        if (this.prev !== null) {
            return this.prev;
        };
        return null;
    }

    public setNext(value): void {
        this.next = value;
    };

    public setPrev(value): void {
        this.prev = value;
    };

    public setValue(value): void {
        this.value = value;
    };

    public toString():string{
        return `${this.value.toString()}${(this.next !== null) ? this.next.toString() : "null"}${
            (this.prev !== null) ? this.prev.toString() : "null"}LinkedListElement`
    };
};
