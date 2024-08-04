import {LinkedListElement} from "../../../Nodes/LinkedListElement"
import { List } from "../../../Interfaces/List/List";

export class LinkedList implements List {
    private head: null | LinkedListElement = null;
    private tail: null | LinkedListElement = null;

    public append(value): void {
        value = new LinkedListElement(value);
        if (this.head === null) {
            this.head = value;
            return;
        };

        let lastValue = this.head.getNext();
        let last = lastValue;
        if (lastValue !== null) {
            while (lastValue != null) {
                last = lastValue;
                lastValue = lastValue.getNext();
            };
            value.setPrev(last);
            last?.setNext(value);
        } else {
            value.setPrev(this.head);
            this.head?.setNext(value);
        };
        this.tail = value;
    };

    clear(): void {
        this.head = null;
        this.tail = null;
    };

    public count(): number {
        let node: LinkedListElement | null = this.head;
        let count: number = 0;
        while (node !== null) {
            count++;
            node = node.getNext();
        }
        return count;
    };

    public index(value): number {
        if (this.head === null) {
            return -1;
        };

        let node: LinkedListElement | null = this.head;
        let valueNode = node.getValue();
        let ind: number = 0;
        let count: number = this.count();
        while (node !== null && valueNode !== value) {
            ind++;
            node = node.getNext();
            valueNode = node?.getValue();
        };

        return ind == count ? -1 : ind;
    };

    public insert(ind: number, value): void {
        value = new LinkedListElement(value);
        let index: number = 0;
        let leftNode: LinkedListElement | null = null;
        let rightNode: LinkedListElement | null = this.head;
        let count = this.count() - 1;

        if(ind <= 0){
            value.setNext(this.head);
            this.head = value;
            return;
        };

        while (index !== ind && rightNode !== null) {
            index++;
            leftNode = rightNode;
            rightNode = rightNode.getNext();
        };
        value.setPrev(leftNode);
        value.setNext(rightNode);
        leftNode?.setNext(value);
        if(index === count) this.tail = value;
    };

    pop(ind: number): void {
        let index: number = 0;
        let node: LinkedListElement | null = this.head;
        let leftNode: LinkedListElement | null | undefined;
        let rightNode: LinkedListElement | null | undefined;
        while (index !== ind && node !== null) {
            index++;
            node = node.getNext();
        };

        leftNode = node?.getPrev();
        rightNode = node?.getNext();
        leftNode?.setNext(rightNode);
        rightNode?.setPrev(leftNode);
    };

    remove(value): void {
        let node: LinkedListElement | null = this.head;
        if(node === null){
            return;
        };

        let valueNode = node.getValue();
        let ind: number = 0;
        let count: number = this.count();
        let leftNode: LinkedListElement | null | undefined;
        let rightNode: LinkedListElement | null | undefined;
    
        while ( valueNode !== value && node !== null) {
            ind++;
            node = node.getNext();
            valueNode = node?.getValue();
        };

        if (ind == count) return;

        leftNode = node?.getPrev();
        rightNode = node?.getNext();
        leftNode?.setNext(rightNode);
        rightNode?.setPrev(leftNode);
    };

    public getHead(): LinkedListElement | null {
        return this.head;
    };
    public getTail(): LinkedListElement | null {
        return this.tail;
    };
};