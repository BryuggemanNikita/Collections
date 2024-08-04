"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashCode = hashCode;
function hashCode(object) {
    var str = object.toString();
    var ind = 0;
    for (var i = 0; i < str.length; i++) {
        ind = ind + str.charCodeAt(i);
    }
    ;
    return ind;
}
;
