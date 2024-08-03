//Element for LinkedList
export class ListElement {
    private value;
    private next:ListElement|null;
    private prev:ListElement|null;

    constructor(value = null, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };

    public getValue() {
        return this.value;
    };

    public getNext(): ListElement | null {
        if (this.next !== null){
            return this.next;
        };
        return null;
    };

    public getPrev(): ListElement | null {
        if (this.prev !== null){
            return this.prev;
        };
        return null;
    }

    public setNext(value): void {
        this.next = value;
    };

    public setPrev(value):void{
        this.prev = value;
    };

    public setValue(value): void {
        this.value = value;
    };
};
