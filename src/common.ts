export interface Comparable<T> {
    equals(other: T): boolean;
}

export function haveItem<T extends Comparable<T>>(arr: Iterable<T>, e: T): boolean {
    for(let e2 of arr) {
        if(e.equals(e2)) return true;
    }
    return false;
}