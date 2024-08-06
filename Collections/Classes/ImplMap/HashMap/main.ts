import { obj } from "../../../Nodes/ObjectLHM";
import { toString } from "../../../Nodes/ObjectLHM";
import { HashMap } from "./HashMAp";

let hmap = new HashMap();

hmap.set("Никита", 18);
hmap.set("Настя", 18);
hmap.set("Кирилл", 10);
hmap.set("Оксана", 30);
hmap.set("Сергей", 30);
hmap.set("Вася", 12);
hmap.delete("Вася");

hmap.set("Кирилл", 11)

console.log(hmap);
console.log(hmap.getBucket(0));
console.log(hmap.getBucket(1));
console.log(hmap.getBucket(2));
console.log(hmap.getBucket(3));
console.log(hmap.getBucket(4).getBucket().getMap());
console.log(hmap.getBucket(5).getBucket().getMap());
console.log(hmap.getBucket(6).getBucket().getMap());
console.log(hmap.getBucket(7).getBucket().getMap());
console.log(hmap.getBucket(8).getBucket().getMap());
console.log(hmap.getBucket(9).getBucket().getMap());
console.log(hmap.getBucket(10));

console.log("");