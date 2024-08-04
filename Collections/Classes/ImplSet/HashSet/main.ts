import { HashSett } from "./HashSet";
import { HashSet } from "./HashSet";
import { hashCode } from "../../../../HashFunction/HashCode";
import { LinkedListElement } from "../../../Nodes/LinkedListElement";

let hsh = new HashSett();

hsh.add(12);
hsh.add(2);
hsh.add(12);
hsh.add(17);
hsh.add(2);
hsh.add(0);

let hset = new HashSet<string>();
hset.add("Рома");
hset.add("Илья");
hset.add("Настя");
hset.add("Никита");
hset.add("Никита");
hset.add("Катя");
hset.add("Гоша");
hset.add("Вася");
hset.add("Лев");
hset.add("Ярик");
hset.add("Дима");
hset.add("Оксана");




console.log(hset);
console.log("");
console.log(hset.getBucket(0));
console.log(hset.getBucket(1));
console.log(hset.getBucket(2));
console.log(hset.getBucket(3));
console.log(hset.getBucket(4));
console.log(hset.getBucket(5));
console.log(hset.getBucket(6));
console.log(hset.getBucket(7));
console.log(hset.getBucket(8));
console.log(hset.getBucket(9));
console.log(hset.getBucket(10));
console.log(hset.getBucket(11));
console.log(hset.getBucket(12));
console.log(hset.getBucket(13));
console.log(hset.getBucket(14));
console.log(hset.getBucket(15));
console.log(hset.getBucket(16));
console.log(hset.getBucket(17));
console.log(hset.getBucket(18));
console.log(hset.getBucket(19));
// console.log(hset.getBucket();




// let hset = new HashSet();
// hset.add(23);
// console.log(hset);