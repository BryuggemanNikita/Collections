import { ListElement } from "./ListElement";

export class SingleLinkedList{
    private Head = new ListElement();

    public add(value):void{
        // const next = new ListElement(value);
        if (this.Head.getValue() === null){
            this.Head.setValue(value);
            return;
        };

        if (this.Head.getNext() != null){
            let lastValue = this.Head.getNext();
            let last = lastValue;
            while(lastValue != null){  
                last = lastValue;   
                lastValue = lastValue.getNext();
            };
            value = new ListElement(value);
            last?.setNext(value);
        }else{
            value = new ListElement(value);
            this.Head.setNext(value);
        }
    };

    public getHead():ListElement{
        return this.Head;
    };
};