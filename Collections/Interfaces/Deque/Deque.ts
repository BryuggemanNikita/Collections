import { Queue } from "../Queue/Queue";

export interface Deque<T> extends Queue<T> {
    appendFirst(value: T): void;

    append(value: T): void;

    popFirst(): T | undefined;

    pop(): T | undefined;

    isEmpty(): boolean;

    extendFirst(values: T[]): void;

    extend(values: T[]): void;

    clear(): void;
};