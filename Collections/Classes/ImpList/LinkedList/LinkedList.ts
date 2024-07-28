import { ListElement } from "./ListElement";
import { List } from "../../../Interfaces/List/List";

export class LinkedList implements List {
    private Head = new ListElement();

    public append(value): void {
        if (this.Head.getValue() === null) {
            this.Head.setValue(value);
            return;
        };

        value = new ListElement(value);
        let lastValue = this.Head.getNext();

        if (lastValue != null) {
            let last = lastValue;
            while (lastValue != null) {
                last = lastValue;
                lastValue = lastValue.getNext();
            };
            last?.setNext(value);
        } else {
            this.Head.setNext(value);
        };
    };

    clear(): void {
        throw new Error("Method not implemented.");
    }
    public count(): number {
        let node: ListElement | null = this.Head;
        let count: number = 0;

        while (node !== null) {
            count++;
            node = node.getNext();
        }
        return count;
    };

    public index(value): number {
        let node: ListElement | null = this.Head;
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

    public insert(ind: number, value) {
        value = new ListElement(value);
        let index: number = 0;
        let leftNode:ListElement|null = null;
        let rightNode:ListElement|null = this.Head;
        
        while(index !== ind && rightNode !== null){
            index++;
            leftNode = rightNode;
            rightNode = rightNode.getNext();
        };
        value.setPrev(leftNode);
        value.setNext(rightNode);
        leftNode?.setNext(value);
        

    };

    pop(ind: number) {
        throw new Error("Method not implemented.");
    }
    remove(value) {
        throw new Error("Method not implemented.");
    }

    public getHead(): ListElement {
        return this.Head;
    };
};