import { Region } from "./region";


export class Champion {
    private name: string;
    private region?: Region;
    private bio: string;
    private url: string;
    private relatedChamps: Champion[]

    constructor(name: string, bio: string, url: string, region?: Region, relatedChamps?: Champion[]) {
        this.name = name;
        this.region = region;
        this.bio = bio;
        this.url = url;
        this.relatedChamps = relatedChamps ? relatedChamps : [];
    }
    
    public getName() : string {
        return this.name;
    }

    public getRegion() : Region | undefined {
        return this.region;
    }

    public getBio(): string {
        return this.bio;
    }

    public getURL() : string {
        return this.url;
    }

    public getRelatedChampions(): Champion[] {
        return this.relatedChamps;
    }
    
}