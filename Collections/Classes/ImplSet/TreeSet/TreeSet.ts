import { Set } from "../../../Interfaces/Set/Set";
import { Node } from "../../../Nodes/Node";

export class TreeSet<T> implements Set<T> {

    private origin: Node | null = null;

    add(value: T): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    delete(value: T): boolean {
        throw new Error("Method not implemented.");
    }
    entries() {
        throw new Error("Method not implemented.");
    }
    has(value: T): boolean {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
}