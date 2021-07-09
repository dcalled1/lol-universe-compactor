import { Comparable, removeRepeated } from "../common";
import { Champion } from "./champion";
import { Story } from "./story";


export class Region implements Comparable<Region> {
    private _name: string;
    private _description: string;
    private _champions: Champion[];
    private _stories: Story[];

    constructor(name: string, description: string, champions: Champion[] = [], stories: Story[] = []) {
        this._name = name;
        this._description = description;
        this._champions = removeRepeated(champions);
        this._stories = removeRepeated(stories);
    }

    //Setters
    public set champions(champions: Champion[]) {
        this._champions = removeRepeated(champions);
    }

    public set stories(stories: Story[]) {
        this._stories = removeRepeated(stories);
    }

    //Getters
    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get champions(): Champion[] {
        return this._champions;
    }

    public get stories(): Story[] {
        return this._stories;
    }

    public equals(other: Region): boolean {
        return this.name == other.name &&
        this.description == other.description;
    }
}