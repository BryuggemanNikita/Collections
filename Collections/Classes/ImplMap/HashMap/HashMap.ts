import { Map } from "../../../Interfaces/Map/Map";
import { HashMapBucket } from "../../../Nodes/HashMapBucket";
import { obj } from "../../../Nodes/ObjectLHM";
import { hashCode } from "../../../../HashFunction/HashCode";
import { ArrayList } from "../../ImplList/ArrayList/ArrayList";

export class HashMap<K, V> implements Map<K, V> {

    private buckets: ArrayList<HashMapBucket<K, V>> = new ArrayList<HashMapBucket<K, V>>();
    private countBuckets: number = 0;
    private countElements: number = 0;

    constructor(countBuckets: number = 15) {
        let x = 0;
        while (x !== countBuckets) {
            let newBucket = new HashMapBucket<K, V>();
            this.buckets.append(newBucket);
            x++;
        };
        this.countBuckets = countBuckets;
    };

    public set(key: K, value: V): void {
        if (this.has(key)) {
            let element = this.get(key);
            if (element !== undefined) element.value = value;
            return;
        };
        let thisBuckets = this.buckets.getArray();
        let countBuckets = this.countBuckets;
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

        bucketInd.set(key, value);
        this.countElements++;
    };

    public get(key: K): obj<K, V> | undefined {
        if (!this.has(key)) return undefined;
        let thisBuckets = this.buckets.getArray();
        let countBuckets = this.countBuckets;
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

        return bucketInd.get(key);
    };

    public expansion(newCountBuckets: number): void {
        let countBuckets = this.countBuckets;
        let thisBuckets = this.buckets;
        let newBuckets: ArrayList<HashMapBucket<K, V>> = new ArrayList();
        let x = 0;
        while (x !== newCountBuckets) {
            let newBucket = new HashMapBucket<K, V>();
            newBuckets.append(newBucket);
            x++;
        };

        this.buckets = newBuckets;
        this.countElements = 0;
        this.countBuckets = newCountBuckets;

        for (let i = 0; i < countBuckets; i++) {
            while (!thisBuckets[i].getBucket().isEmpty()) {
                let elAdd = thisBuckets[i].getBucket().pop()
                if (elAdd !== undefined) this.set(elAdd.key, elAdd.value);
            };
        };
    };

    public clear(): void {
        let x = 0;
        while (x !== 5) {
            let newBucket = new HashMapBucket<K, V>();
            this.buckets.append(newBucket);
            x++;
        };
        this.countBuckets = 5;;
    };

    delete(key: K): boolean {
        if (!this.has(key)) return false;

        let thisBuckets = this.buckets.getArray();
        let countBuckets = this.countBuckets
        let hashValue: number = hashCode(key);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        bucketInd.delete(key);
        return true;
    };

    public has(key: K): boolean {
        let thisBuckets = this.buckets.getArray();
        let hashValue: number = hashCode(key);
        let countBuckets = this.countBuckets
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return (bucketInd.has(key));
    };

    public size(): number {
        return this.countElements;
    };

    public sizeBuckets(): number {
        return this.buckets.count();
    };

    public getBucket(ind:number){
        return this.buckets.getArray()[ind];
    }
};