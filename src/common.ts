export interface Comparable<T> {
    equals(other: T): boolean;
}

export function haveItem<T extends Comparable<T>>(arr: Array<T>, e: T): boolean {
    for(const e2 of arr) 
        if(e.equals(e2)) return true;
    
    return false;
}

export function removeRepeated<T extends Comparable<T>>(arr: Array<T>): Array<T> {
    let cleanArray: Array<T> = [];
    for(const e of arr) 
        if(!haveItem(cleanArray, e)) cleanArray.push(e);

    return cleanArray;
}