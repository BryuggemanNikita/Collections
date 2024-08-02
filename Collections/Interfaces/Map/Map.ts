let mp = new Map();
mp.set(12, 6)

mp.set(3, 4)
mp.set(14, 2)
mp.set(12, 7)
console.log(mp);


export interface Map<K, V> {
    set(key: K, value: V): void;

    get(key: K);

    delete(key: K);

    has(key:K):boolean;

    clear(): void;

    size(): number;
};

