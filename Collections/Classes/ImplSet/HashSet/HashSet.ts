import { Set } from "../../../Interfaces/Set/Set";
import { Bucket } from "../../../Nodes/Bucket";
import { hashCode } from "../../../../HashFunction/HashCode";
import { Types } from "../../../../Enums/Types";

export class HashSett<T> implements Set<T> {
    private set: T[] = [];

    public add(value: T): void {
        if (this.has(value)) return;
        this.set.push(value);
    };

    public clear(): void {
        this.set = [];
    };

    delete(value: T): boolean {
        let indexValue = this.set.indexOf(value);
        if (indexValue == -1) return false;
        this.set.splice(indexValue, 1);
        return true;
    };

    public entries() {
        console.log("Method entries not implemented.");
    };

    public has(value: T): boolean {
        let flag: boolean = false;
        this.set.forEach(e => {
            if (e === value) flag = true;
        });
        return flag;
    };

    public size(): number {
        return this.set.length;
    };

    public getSet(): T[] {
        return this.set;
    };
};

export class HashSet<T> implements Set<T> {

    private buckets: Bucket<T>[] = []
    private countBuckets: number = 0;
    private countElements: number = 0;

    constructor() {
        let x = 0;
        while (x !== 5) {
            let newBucket = new Bucket<T>();
            this.buckets.push(newBucket);
            x++;
        };
        this.countBuckets = 5;
    };

    public add(value): void {
        let thisBuckets = this.buckets;
        let countBuckets = this.countBuckets
        let countElements = this.countElements
        let hashValue: number = hashCode(value);
        let hashIndInBuckets: number = hashValue % countBuckets;
        let bucketInd = thisBuckets[hashIndInBuckets].getBucket();

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
                console.log("I" + i)
                while (!thisBuckets[i].getBucket().isEmpty()) {
                    this.add(thisBuckets[i].getBucket().pop())
                };
            };
            this.add(value);
            return;
        };

        if (!bucketInd.has(value)) {
            thisBuckets[hashIndInBuckets].getBucket().append(value);
            this.countElements++;
        } else {
            return
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
        throw new Error("Method not implemented.");
    }
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
    }

    public size(): number {
        return this.countElements;
    };

    public sizeBuckets(): number {
        return this.buckets.length;
    };
};