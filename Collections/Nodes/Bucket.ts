import { ArrayList } from "../Classes/ImplList/ArrayList/ArrayList";

export class Bucket<T> {
    private bucket: ArrayList<T> = new ArrayList<T>();

    public getBucket() {
        return this.bucket;
    };
};