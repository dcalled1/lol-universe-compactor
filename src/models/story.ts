import { Champion } from "./champion";
import { Region } from "./region";


export class Story {
    private _title: string;
    private _author: string;
    private _text: string;
    private _champions: (Champion | string)[];
    private _regions: (Region | string)[];

    constructor(title: string, author: string, text: string, champions?: (Champion | string)[], regions?: (Region | string)[]) {
        this._title = title;
        this._author = author;
        this._text = text;
        this._champions = champions !== undefined ? champions : [];
        this._regions = regions !== undefined ? regions : [];
    }

    //Setters
    public set champions(champions: (Champion | string)[]) {
        this._champions = champions;
    }

    public set regions(regions: (Region | string)[]) {
        this._regions = regions;
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

    public get champions(): (Champion | string)[] {
        return this._champions;
    }

    public get regions(): (Region | string)[] {
        return this._regions;
    }

    public equals(other: Story):boolean {
        return  this.title  == other.title &&
                this.author == other.author &&
                this.text   == other.text;
    }
}