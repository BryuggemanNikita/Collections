import { Errors } from "./Errors";

export class ListElement {
    private value;
    private next;

    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
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

    public setNext(value): void {
        this.next = value;
    };

    public setValue(value): void {
        this.value = value;
    };
};
