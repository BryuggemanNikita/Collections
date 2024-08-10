//Element for LinkedList
export class LinkedListElement<T> {
    private value: T;
    private next: LinkedListElement<T> | null;
    private prev: LinkedListElement<T> | null;

    constructor(value: T, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };

    public getValue(): T {
        return this.value;
    };

    public getNext(): LinkedListElement<T> | null {
        if (this.next !== null) {
            return this.next;
        };
        return null;
    };

    public getPrev(): LinkedListElement<T> | null {
        if (this.prev !== null) {
            return this.prev;
        };
        return null;
    }

    public setNext(value: LinkedListElement<T> | null): void {
        this.next = value;
    };

    public setPrev(value: LinkedListElement<T> | null): void {
        this.prev = value;
    };

    public setValue(value: T): void {
        this.value = value;
    };

    public toString(): string {
        return `${(this.value !== null) ? this.value?.toString() : "null"}${(this.next !== null) ? this.next.toString() : "null"}${(this.prev !== null) ? this.prev.toString() : "null"}LinkedListElement`
    };
};
