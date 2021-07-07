import { Champion } from "./champion";
import { Region } from "./region";


export class Story {
    private title: string;
    private author: string;
    private text: string;
    private champions: (Champion | string)[];
    private regions: (Region | string)[];

    constructor(title: string, author: string, text: string, champions?: (Champion | string)[], regions?: (Region | string)[]) {
        this.title = title;
        this.author = author;
        this.text = text;
        this.champions = champions ? champions : [];
        this.regions = regions ? regions : [];
    }

    public setChampions(champions: [Champion | string]) {
        this.champions = champions;
    }

    public setRegions(regions: [Region | string]) {
        this.regions = regions;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }
    
    public getText(): string {
        return this.text;
    }

    public getChampions(): (Champion | string)[] {
        return this.champions;
    }

    public getRegions(): (Region | string)[] {
        return this.regions;
    }
}