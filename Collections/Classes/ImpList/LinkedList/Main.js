"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Linkedlist_1 = require("./Linkedlist");
var list = new Linkedlist_1.LinkedList();
list.append(13);
list.append(15);
list.append(18);
list.append(null);
list.append(120);
var el1 = list.getHead();
var el2 = el1.getNext();
var el3 = el2 === null || el2 === void 0 ? void 0 : el2.getNext();
var el4 = el3 === null || el3 === void 0 ? void 0 : el3.getNext();
console.log(el1 === null || el1 === void 0 ? void 0 : el1.getValue());
console.log(el2 === null || el2 === void 0 ? void 0 : el2.getValue());
console.log(el3 === null || el3 === void 0 ? void 0 : el3.getValue());
console.log(el4 === null || el4 === void 0 ? void 0 : el4.getValue());
// console.log(el1)
// console.log(el2)
// console.log(el3)
// console.log(el4)
console.log(list.count());
console.log(list.index(13));
console.log(list.index(15));
console.log(list.index(18));
console.log(list.index(120));
console.log(list.index(135));
console.log("----------");
list.insert(2, 17);
var el5 = list.getHead();
var el6 = el5.getNext();
var el7 = el6 === null || el6 === void 0 ? void 0 : el6.getNext();
var el8 = el7 === null || el7 === void 0 ? void 0 : el7.getNext();
console.log(el5);
console.log(el6);
console.log(el7);
console.log(el8);
console.log(el5 === null || el5 === void 0 ? void 0 : el5.getValue());
console.log(el6 === null || el6 === void 0 ? void 0 : el6.getValue());
console.log(el7 === null || el7 === void 0 ? void 0 : el7.getValue());
console.log(el8 === null || el8 === void 0 ? void 0 : el8.getValue());
