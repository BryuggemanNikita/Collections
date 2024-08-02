import { HashSet } from "./HashSet";

let hsh = new HashSet();

hsh.add(12);
hsh.add(2);
hsh.add(12);
hsh.add(17);
hsh.add(2);
hsh.add(0);

console.log(hsh.size()); //4