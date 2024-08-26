import { obj } from "../../../Nodes/ObjectLHM";
import { toString } from "../../../Nodes/ObjectLHM";
import { HashMap } from "./HashMap";

let hmap = new HashMap(10);

hmap.set("Настя", 18);
hmap.set("Кирилл", 10);
hmap.set("Петя", 8);
hmap.set("Игорь", 954);
hmap.set("Семен", 23);
hmap.set("Акакий", 574);
hmap.set("Оксана", 30);
hmap.set("Сергей", 30);
hmap.set("Вася", 12);
hmap.set("Филип", 235);
hmap.set("Олег", 30);
hmap.set("Лена", 1235);
hmap.set("Дима", 34);

hmap.set("Кирилл", 11)

console.log(hmap);
console.log(hmap.getBucket(0));
console.log(hmap.getBucket(1));
console.log(hmap.getBucket(2));
console.log(hmap.getBucket(3));
console.log(hmap.getBucket(4).getBucket().getArray());
console.log(hmap.getBucket(5).getBucket().getArray());
console.log(hmap.getBucket(6).getBucket().getArray());
console.log(hmap.getBucket(7).getBucket().getArray());
console.log(hmap.getBucket(8).getBucket().getArray());
console.log(hmap.getBucket(9).getBucket().getArray());
console.log(hmap.getBucket(10));

console.log("");