import { Champion } from "./champion";
import { Story } from "./story";


export class Region {
    private name: string;
    private description: string;
    private champions: Champion[];
    private stories: Story[];

    constructor(name: string, description: string, champions?: Champion[], stories?: Story[]) {
        this.name = name;
        this.description = description;
        this.champions = champions ? champions : [];
        this.stories = stories ? stories : [];
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getChampions(): Champion[] {
        return this.champions;
    }

    public getStories(): Story[] {
        return this.stories;
    }
}