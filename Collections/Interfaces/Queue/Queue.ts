export interface Queue<T>{
    append(value: T): void;

    pop():T|undefined;

    isEmpty(): boolean;

    extend(values:T[]):void;

    clear():void;
};