import { Set } from "../../../Interfaces/Set/Set";
import { Bucket } from "../../../Nodes/Bucket";
import { hashCode } from "../../../../HashFunction/HashCode";

export class HashSet<T> implements Set<T> {

    private buckets: Bucket<T>[] = []
    private countBuckets: number = 0;
    private countElements: number = 0;

    constructor(countBuckets:number = 15) {
        let x = 0;
        while (x !== countBuckets) {
            let newBucket = new Bucket<T>();
            this.buckets.push(newBucket);
            x++;
        };
        this.countBuckets = countBuckets;
    };

    public add(value: T): void {
        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets
        let hashValue: number = hashCode(value);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

        if (!bucketInd.has(value)) {
            thisBuckets[hashIndInBuckets].getBucket().append(value);
            this.countElements++;
        } else {
            return
        };
    };

    public expansion(){
        let countBuckets = this.countBuckets
        let countElements = this.countElements;
        let thisBuckets = this.buckets;
        if (countBuckets === countElements) {
            let countNewBuckets = countBuckets * 2;
            let newBuckets: Bucket<T>[] = [];
            let x = 0;
            while (x !== countNewBuckets) {
                let newBucket = new Bucket<T>();
                newBuckets.push(newBucket);
                x++;
            };

            this.buckets = newBuckets;
            this.countElements = 0;
            this.countBuckets = countNewBuckets;

            for (let i = 0; i < countBuckets; i++) {
                while (!thisBuckets[i].getBucket().isEmpty()) {
                    let elAdd = thisBuckets[i].getBucket().pop()
                    if (elAdd !== undefined) this.add(elAdd);
                };
            };
        };
    };

    public clear(): void {
        let x = 0;
        while (x !== 5) {
            let newBucket = new Bucket<T>();
            this.buckets.push(newBucket);
            x++;
        };
        this.countBuckets = 5;;
    };

    delete(value: T): boolean {
        if (!this.has(value)) return false;

        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets
        let hashValue: number = hashCode(value);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        bucketInd.remove(value);
        return true;
    };

    public has(value: T): boolean {
        let thisBuckets = this.buckets;
        let hashValue: number = hashCode(value);
        let countBuckets = this.countBuckets
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return (bucketInd.has(value));
    };

    public getBucket(ind: number): Bucket<T> {
        return this.buckets[ind];
    };

    public size(): number {
        return this.countElements;
    };

    public sizeBuckets(): number {
        return this.buckets.length;
    };
};