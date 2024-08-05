"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMapBucket = void 0;
var ArrayMap_1 = require("../Classes/ImplMap/LinkedHashMap/ArrayMap");
var HashMapBucket = /** @class */ (function () {
    function HashMapBucket() {
        this.bucket = new ArrayMap_1.ArrayMap();
    }
    HashMapBucket.prototype.getBucket = function () {
        return this.bucket;
    };
    ;
    return HashMapBucket;
}());
exports.HashMapBucket = HashMapBucket;
;
