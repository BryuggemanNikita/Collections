"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bucket = void 0;
var ArrayQueue_1 = require("../Classes/ImplQueue/ArrayQueue/ArrayQueue");
var Bucket = /** @class */ (function () {
    function Bucket() {
        this.bucket = new ArrayQueue_1.ArrayQueue();
    }
    Bucket.prototype.getBucket = function () {
        return this.bucket;
    };
    ;
    return Bucket;
}());
exports.Bucket = Bucket;
;
