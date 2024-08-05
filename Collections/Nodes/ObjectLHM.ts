//Type for LinkedHashMap
export type obj<K, V> = {
    key:K,
    value:V,
};

export function toString<K, V>(obj:obj<K, V>):string{
    return `${obj.key}${obj.value}obj`
}