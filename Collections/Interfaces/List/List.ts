
export interface List<T>{
    append(value:T):void;

    clear():void;

    count():number;

    index(value:T):number;

    insert(ind:number, value:T);

    pop(ind:number);

    remove(value:T);
};