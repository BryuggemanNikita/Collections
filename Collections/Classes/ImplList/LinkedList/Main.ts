import { LinkedList } from "./LinkedList";

let list = new LinkedList();

list.append(13);
list.append(15);
list.append(18);
list.append(null);
list.append(120);

let el1 = list.getHead();
let el2 = el1?.getNext();
let el3 = el2?.getNext();
let el4 = el3?.getNext();

console.log("1----------");

// console.log(el1?.getValue())
// console.log(el2?.getValue())
// console.log(el3?.getValue())
// console.log(el4?.getValue())

console.log("2----------");

// console.log(el1?.getPrev())
// console.log(el2?.getPrev().getValue())
// console.log(el3?.getPrev().getValue())
// console.log(el4?.getPrev().getValue())

console.log("3----------");

// console.log(list.count());
// console.log(list.index(13));
// console.log(list.index(15));
// console.log(list.index(18));
// console.log(list.index(120));
// console.log(list.index(135));

console.log("4----------");
list.insert(2, 17);

let el5 = list.getHead();
let el6 = el5?.getNext();
let el7 = el6?.getNext();
let el8 = el7?.getNext();

// console.log(el5)
// console.log(el6)
// console.log(el7)
// console.log(el8)

console.log("5----------");

// console.log(el5?.getValue())
// console.log(el6?.getValue())
// console.log(el7?.getValue())
// console.log(el8?.getValue())

list.pop(2);

// el5 = list.getHead();
// el6 = el5?.getNext();
// el7 = el6?.getNext();
// el8 = el7?.getNext();

// console.log(el5?.getValue())
// console.log(el6?.getValue())
// console.log(el7?.getValue())
// console.log(el8?.getValue())

console.log("6----------");

// list.insert(0, 1);
list.remove(150)

el5 = list.getHead();
el6 = el5?.getNext();
el7 = el6?.getNext();
el8 = el7?.getNext();
// let el9 = el8?.getNext();

console.log(el5?.getValue())
console.log(el6?.getValue())
console.log(el7?.getValue())
console.log(el8?.getValue())
// console.log(el9?.getValue())