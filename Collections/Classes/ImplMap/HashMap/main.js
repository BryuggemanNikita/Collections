"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashMAp_1 = require("./HashMAp");
var hmap = new HashMAp_1.HashMap();
hmap.set("Никита", 18);
hmap.set("Настя", 18);
hmap.set("Кирилл", 10);
hmap.set("Оксана", 30);
hmap.set("Сергей", 30);
hmap.set("Вася", 12);
hmap.delete("Вася");
hmap.set("Кирилл", 11);
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
