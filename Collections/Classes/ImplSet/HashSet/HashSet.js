"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
var Bucket_1 = require("../../../Nodes/Bucket");
var HashCode_1 = require("../../../../HashFunction/HashCode");
var HashSet = /** @class */ (function () {
    function HashSet() {
        this.buckets = [];
        this.countBuckets = 0;
        this.countElements = 0;
        var x = 0;
        while (x !== 5) {
            var newBucket = new Bucket_1.Bucket();
            this.buckets.push(newBucket);
            x++;
        }
        ;
        this.countBuckets = 5;
    }
    ;
    HashSet.prototype.add = function (value) {
        var thisBuckets = this.buckets;
        var countBuckets = this.countBuckets;
        var countElements = this.countElements;
        var hashValue = (0, HashCode_1.hashCode)(value);
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        if (countBuckets === countElements) {
            var countNewBuckets = countBuckets * 2;
            var newBuckets = [];
            var x = 0;
            while (x !== countNewBuckets) {
                var newBucket = new Bucket_1.Bucket();
                newBuckets.push(newBucket);
                x++;
            }
            ;
            this.buckets = newBuckets;
            this.countElements = 0;
            this.countBuckets = countNewBuckets;
            for (var i = 0; i < countBuckets; i++) {
                console.log("I" + i);
                while (!thisBuckets[i].getBucket().isEmpty()) {
                    var elAdd = thisBuckets[i].getBucket().pop();
                    if (elAdd !== undefined)
                        this.add(elAdd);
                }
                ;
            }
            ;
            this.add(value);
            return;
        }
        ;
        if (!bucketInd.has(value)) {
            thisBuckets[hashIndInBuckets].getBucket().append(value);
            this.countElements++;
        }
        else {
            return;
        }
        ;
    };
    ;
    HashSet.prototype.clear = function () {
        var x = 0;
        while (x !== 5) {
            var newBucket = new Bucket_1.Bucket();
            this.buckets.push(newBucket);
            x++;
        }
        ;
        this.countBuckets = 5;
        ;
    };
    ;
    HashSet.prototype.delete = function (value) {
        if (!this.has(value))
            return false;
        var thisBuckets = this.buckets;
        var countBuckets = this.countBuckets;
        var hashValue = (0, HashCode_1.hashCode)(value);
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        bucketInd.remove(value);
        return true;
    };
    ;
    HashSet.prototype.has = function (value) {
        var thisBuckets = this.buckets;
        var hashValue = (0, HashCode_1.hashCode)(value);
        var countBuckets = this.countBuckets;
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return (bucketInd.has(value));
    };
    ;
    HashSet.prototype.getBucket = function (ind) {
        return this.buckets[ind];
    };
    ;
    HashSet.prototype.size = function () {
        return this.countElements;
    };
    ;
    HashSet.prototype.sizeBuckets = function () {
        return this.buckets.length;
    };
    ;
    return HashSet;
}());
exports.HashSet = HashSet;
;
