import { LinkedHashMap } from "./LinkedHashMap";

let lhm = new LinkedHashMap();
lhm.set(12, "3");
lhm.set(0, 3);
lhm.set(12, 1203);
lhm.set(2, "1203");

console.log(lhm)
console.log(lhm.get(0))
console.log(lhm.has(43));