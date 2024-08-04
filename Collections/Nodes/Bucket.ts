import { ArrayQueue } from "../Classes/ImplQueue/ArrayQueue/ArrayQueue";

export class Bucket<T> {
    private bucket: ArrayQueue<T> = new ArrayQueue<T>();

    public getBucket() {
        return this.bucket;
    };
};