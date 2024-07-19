import { SingleLinkedList } from "./Linkedlist";

let list = new SingleLinkedList();

list.add(13);
list.add(15);
list.add(18);
list.add(120);

let el1 = list.getHead();
let el2 = el1.getNext();
let el3 = el2?.getNext();
let el4 = el3?.getNext();

console.log(el1?.getValue())
console.log(el2?.getValue())
console.log(el3?.getValue())
console.log(el4?.getValue())

console.log(el1)
console.log(el2)
console.log(el3)
console.log(el4)

