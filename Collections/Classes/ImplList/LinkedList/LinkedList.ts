import { LinkedListElement } from "../../../Nodes/LinkedListElement"
import { List } from "../../../Interfaces/List/List";

export class LinkedList<T> implements List<T> {
    private head: null | LinkedListElement<T> = null;
    private tail: null | LinkedListElement<T> = null;

    // Insert node in LinkedList 
    public append(value: T): void {
        let pushValue: LinkedListElement<T> = new LinkedListElement<T>(value);
        let thisHead: LinkedListElement<T> | null = this.head;
        if (thisHead === null) {
            this.head = pushValue;
            return;
        };

        let lastValue: LinkedListElement<T> | null = thisHead.getNext();
        let prevLast: LinkedListElement<T> = thisHead;
        if (lastValue !== null) {
            while (lastValue !== null) {
                prevLast = lastValue;
                lastValue = lastValue.getNext();
            };
            pushValue.setPrev(prevLast);
            prevLast.setNext(pushValue);
        } else {
            pushValue.setPrev(this.head);
            thisHead.setNext(pushValue);
        };
        this.tail = pushValue;
    };

    // Clear LinkedList
    public clear(): void {
        this.head = null;
        this.tail = null;
    };

    // Getter number of count elements in LinkedList
    public count(): number {
        let node: LinkedListElement<T> | null = this.head;
        let count: number = 0;
        while (node !== null) {
            count++;
            node = node.getNext();
        }
        return count;
    };

    // Getter index of value in LinkedList
    public index(value: T): number {
        if (this.head === null) return -1;

        let node: LinkedListElement<T> | null = this.head;
        let valueNode: T = node.getValue();
        let ind: number = 0;
        let count: number = this.count();
        while (node !== null && valueNode !== value) {
            ind++;
            node = node.getNext();
            if (node === null) return -1;
            valueNode = node.getValue();
        };

        return ind == count ? -1 : ind;
    };

    // Insert node in LinkedList with index
    public insert(ind: number, value: T): void {
        let pushValue = new LinkedListElement<T>(value);
        let index: number = 0;
        let leftNode: LinkedListElement<T> | null = null;
        let rightNode: LinkedListElement<T> | null = this.head;
        let count = this.count() - 1;

        if (ind <= 0) {
            let thisHead = this.head;
            if (thisHead === null) return this.append(value);
            pushValue.setNext(thisHead);
            thisHead.setPrev(pushValue);
            this.head = pushValue;
            return;
        };

        while (index !== ind && rightNode !== null) {
            index++;
            leftNode = rightNode;
            rightNode = rightNode.getNext();
        };
        pushValue.setPrev(leftNode);
        pushValue.setNext(rightNode);
        (leftNode !== null) ? leftNode.setNext(pushValue) : 0;
        (rightNode !== null) ? rightNode.setPrev(pushValue) : 0;
        if (index === count) this.tail = pushValue;
    };

    // Removing a node from the LinkedList for index \ Удаление узла из листа по индексу
    public pop(ind: number = -1): LinkedListElement<T> | null {
        let lenghtList: number = this.count() - 1;
        if (ind === -1 || ind == lenghtList) {
            let tail = this.tail;
            if (tail === null) return null;
            let leftNode = tail.getPrev()
            leftNode?.setNext(null);
            this.tail = leftNode;
            return tail;
        };
        if (ind === 0) {
            let head = this.head;
            if (head === null) return null;
            let rightNode = head.getNext()
            rightNode?.setPrev(null);
            this.head = rightNode;
            return head;
        };
        if (ind >= lenghtList || ind < 0) return null;

        let index: number = 0;
        let node: LinkedListElement<T> | null = this.head;
        let leftNode: LinkedListElement<T> | null;
        let rightNode: LinkedListElement<T> | null;

        while (index != ind) {
            index++;
            if (node === null) return null;
            node = node.getNext();
        };

        if (node === null) return null
        leftNode = node.getPrev();
        rightNode = node.getNext();
        (leftNode !== null) ? leftNode.setNext(rightNode) : 0;
        (rightNode !== null) ? rightNode.setPrev(leftNode) : 0;
        return node;
    };

    // Removing a node from the LinkedList for value \ Удаление узла из листа по значению
    public remove(value: T): LinkedListElement<T> | null {
        let node: LinkedListElement<T> | null = this.head;
        if (node === null) return null;

        let valueNode: T = node.getValue();
        let ind: number = 0;
        let count: number = this.count() - 1;
        let leftNode: LinkedListElement<T> | null;
        let rightNode: LinkedListElement<T> | null;

        while (valueNode !== value) {
            ind++;
            node = node.getNext();
            if (node === null) return null;
            valueNode = node.getValue();
        };
        leftNode = node.getPrev();
        rightNode = node.getNext();

        if (ind > count) return null;
        if (ind === 0) {
            this.head = rightNode;
        };
        if (ind == count) {
            this.tail = leftNode;
        };

        (leftNode !== null) ? leftNode.setNext(rightNode) : 0;
        (rightNode !== null) ? rightNode.setPrev(leftNode) : 0;

        return node;
    };

    // Getter LinkedList head
    public getHead(): LinkedListElement<T> | null {
        return this.head;
    };

    // Getter LinkedList tail
    public getTail(): LinkedListElement<T> | null {
        return this.tail;
    };
};