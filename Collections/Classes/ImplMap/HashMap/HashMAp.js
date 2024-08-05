"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
var HashMapBucket_1 = require("../../../Nodes/HashMapBucket");
var HashCode_1 = require("../../../../HashFunction/HashCode");
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.buckets = [];
        this.countBuckets = 0;
        this.countElements = 0;
        var x = 0;
        while (x !== 5) {
            var newBucket = new HashMapBucket_1.HashMapBucket();
            this.buckets.push(newBucket);
            x++;
        }
        ;
        this.countBuckets = 5;
    }
    ;
    HashMap.prototype.set = function (key, value) {
        if (this.has(key)) {
            var element = this.get(key);
            if (element !== undefined)
                element.value = value;
        }
        var thisBuckets = this.buckets;
        var countBuckets = this.countBuckets;
        var countElements = this.countElements;
        var hashValue = (0, HashCode_1.hashCode)(key);
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        if (countBuckets === countElements) {
            var countNewBuckets = countBuckets * 2;
            var newBuckets = [];
            var x = 0;
            while (x !== countNewBuckets) {
                var newBucket = new HashMapBucket_1.HashMapBucket();
                newBuckets.push(newBucket);
                x++;
            }
            ;
            this.buckets = newBuckets;
            this.countElements = 0;
            this.countBuckets = countNewBuckets;
            for (var i = 0; i < countBuckets; i++) {
                while (!thisBuckets[i].getBucket().isEmpty()) {
                    var elAdd = thisBuckets[i].getBucket().pop();
                    if (elAdd !== undefined)
                        this.set(elAdd.key, elAdd.value);
                }
                ;
            }
            ;
            this.set(key, value);
            return;
        }
        ;
        if (!bucketInd.has(key)) {
            bucketInd.set(key, value);
            this.countElements++;
        }
        else {
            return;
        }
        ;
    };
    ;
    HashMap.prototype.get = function (key) {
        if (!this.has(key))
            return undefined;
        var thisBuckets = this.buckets;
        var countBuckets = this.countBuckets;
        var hashValue = (0, HashCode_1.hashCode)(key);
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return bucketInd.get(key);
    };
    ;
    HashMap.prototype.clear = function () {
        var x = 0;
        while (x !== 5) {
            var newBucket = new HashMapBucket_1.HashMapBucket();
            this.buckets.push(newBucket);
            x++;
        }
        ;
        this.countBuckets = 5;
        ;
    };
    ;
    HashMap.prototype.delete = function (key) {
        if (!this.has(key))
            return false;
        var thisBuckets = this.buckets;
        var countBuckets = this.countBuckets;
        var hashValue = (0, HashCode_1.hashCode)(key);
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        bucketInd.delete(key);
        return true;
    };
    ;
    HashMap.prototype.has = function (key) {
        var thisBuckets = this.buckets;
        var hashValue = (0, HashCode_1.hashCode)(key);
        var countBuckets = this.countBuckets;
        var hashIndInBuckets = hashValue % countBuckets;
        var bucketInd = thisBuckets[hashIndInBuckets].getBucket();
        return (bucketInd.has(key));
    };
    ;
    HashMap.prototype.getBucket = function (ind) {
        return this.buckets[ind];
    };
    ;
    HashMap.prototype.size = function () {
        return this.countElements;
    };
    ;
    HashMap.prototype.sizeBuckets = function () {
        return this.buckets.length;
    };
    ;
    return HashMap;
}());
exports.HashMap = HashMap;
;
