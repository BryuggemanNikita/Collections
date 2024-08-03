export interface Map<K, V> {
    set(key: K, value: V): void;

    get(key: K);

    delete(key: K);

    has(key:K):boolean;

    clear(): void;

    size(): number;
};