export interface Set<T>{
    add(value:T):void;

    clear():void;

    delete(value:T):boolean;

    // entries();
    
    has(value:T):boolean;

    size():number;
};