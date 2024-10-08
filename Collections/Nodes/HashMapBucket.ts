import { ArrayMap } from "../Classes/ImplMap/ArrayMap/ArrayMap";

export class HashMapBucket<K, V> {
    private bucket: ArrayMap<K, V> = new ArrayMap<K, V>();

    public getBucket():ArrayMap<K, V> {
        return this.bucket;
    };
};