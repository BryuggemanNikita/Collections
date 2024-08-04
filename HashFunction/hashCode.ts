export function hashCode(object:any): number {
    let str = object.toString();
    let ind: number = 0;
    for (var i = 0; i < str.length; i++) {
        ind = ind + str.charCodeAt(i);
    };
    return ind;
};