import { Comparable, haveItem, removeRepeated } from "../common";
import { Champion } from "./champion";
import { Region } from "./region";


export class Story implements Comparable<Story> {
    private _title: string;
    private _author: string;
    private _text: string;
    private _champions: Champion[];
    private _regions: Region[];

    constructor(title: string, author: string, text: string, champions: Champion[] = [], regions: Region[] = []) {
        this._title = title;
        this._author = author;
        this._text = text;
        this._champions = removeRepeated(champions);
        this._regions = removeRepeated(regions);
    }

    public addChampion(newChamp: Champion) {
        if(!haveItem(this.champions, newChamp))
            this.champions.push(newChamp)
    }

    public addRegion(newRegion: Region) {
        if(!haveItem(this.regions, newRegion))
            this.regions.push(newRegion);
    }

    //Setters
    public set champions(champions: Champion[]) {
        this._champions = removeRepeated(champions);
    }

    public set regions(regions: Region[]) {
        this._regions = removeRepeated(regions);
    }

    //Getters
    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
    }
    
    public get text(): string {
        return this._text;
    }

    public get champions(): Champion[] {
        return this._champions;
    }

    public get regions(): Region[] {
        return this._regions;
    }

    public equals(other: Story):boolean {
        return  this.title  == other.title &&
                this.author == other.author &&
                this.text   == other.text;
    }
}