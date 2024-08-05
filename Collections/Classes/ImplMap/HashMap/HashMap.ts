import { Map } from "../../../Interfaces/Map/Map";
import { HashMapBucket } from "../../../Nodes/HashMapBucket";
import { obj } from "../../../Nodes/ObjectLHM";
import { hashCode } from "../../../../HashFunction/HashCode";

export class HashMap<K, V> implements Map<K, V> {

    private buckets: HashMapBucket<K, V>[] = []
    private countBuckets: number = 0;
    private countElements: number = 0;

    constructor() {
        let x = 0;
        while (x !== 5) {
            let newBucket = new HashMapBucket<K, V>();
            this.buckets.push(newBucket);
            x++;
        };
        this.countBuckets = 5;
    };

    public set(key: K, value: V): void {
        if (this.has(key)) {
            let element = this.get(key);
            if (element !== undefined) element.value = value;
            return;
        };

        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets;
        let countElements = this.countElements;
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

        if (countBuckets === countElements) {
            let countNewBuckets = countBuckets * 2;
            let newBuckets: HashMapBucket<K, V>[] = [];
            let x = 0;
            while (x !== countNewBuckets) {
                let newBucket = new HashMapBucket<K, V>();
                newBuckets.push(newBucket);
                x++;
            };

            this.buckets = newBuckets;
            this.countElements = 0;
            this.countBuckets = countNewBuckets;

            for (let i = 0; i < countBuckets; i++) {
                while (!thisBuckets[i].getBucket().isEmpty()) {
                    let elAdd = thisBuckets[i].getBucket().pop()
                    if (elAdd !== undefined) this.set(elAdd.key, elAdd.value);
                };
            };
            this.set(key, value);
            return;
        };

        bucketInd.set(key, value);
        this.countElements++;
    };

    public get(key: K): obj<K, V> | undefined {
        if (!this.has(key)) return undefined;
        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets;
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

        return bucketInd.get(key);
    };

    public clear(): void {
        let x = 0;
        while (x !== 5) {
            let newBucket = new HashMapBucket<K, V>();
            this.buckets.push(newBucket);
            x++;
        };
        this.countBuckets = 5;;
    };

    delete(key: K): boolean {
        if (!this.has(key)) return false;

        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        bucketInd.delete(key);
        return true;
    };

    public has(key: K): boolean {
        let thisBuckets = this.buckets;
        let hashValue: number = hashCode(key);
        let countBuckets = this.countBuckets
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return (bucketInd.has(key));
    };

    public getBucket(ind: number): HashMapBucket<K, V> {
        return this.buckets[ind];
    };

    public size(): number {
        return this.countElements;
    };

    public sizeBuckets(): number {
        return this.buckets.length;
    };
};