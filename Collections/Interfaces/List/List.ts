
export interface List{
    append(value):void;

    clear():void;

    count():number;

    index(value):number;

    insert(ind:number, value);

    pop(ind:number);

    remove(value);
};