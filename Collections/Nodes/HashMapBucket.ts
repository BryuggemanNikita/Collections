import { ArrayMap } from "../Classes/ImplMap/LinkedHashMap/ArrayMap";

export class HashMapBucket<K, V> {
    private bucket: ArrayMap<K, V> = new ArrayMap<K, V>();

    public getBucket() {
        return this.bucket;
    };
};