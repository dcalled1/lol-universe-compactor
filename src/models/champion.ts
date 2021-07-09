import { Comparable } from "../common";
import { Region } from "./region";


export class Champion implements Comparable<Champion> {
    private _name: string;
    private _region!: Region;
    private _bio: string;
    private _url: string;
    private _relatedChamps: Champion[]

    constructor(name: string, bio: string, url: string, region?: Region, relatedChamps: Champion[] = []) {
        this._name = name;
        if(region !== undefined) this._region = region;
        this._bio = bio;
        this._url = url;
        this._relatedChamps = relatedChamps;
    }

    //Setters
    public set region(region: Region) {
        this.region = region;
    }

    public set relatedChampions(champs: Champion[]) {
        this._relatedChamps = champs;
    }
    
    //Getters
    public get name(): string {
        return this._name;
    }

    public get region(): Region {
        return this._region;
    }

    public get bio(): string {
        return this._bio;
    }

    public get URL(): string {
        return this._url;
    }

    public get relatedChampions(): Champion[] {
        return this._relatedChamps;
    }

    public equals(other: Champion): boolean {
        return  this.name == other.name &&
                this.bio  == other.bio  &&
                this.URL  == other.URL;
    }
    
}