import { ListScrapper } from "./scrapper/scanners/ListScrapper";


const scrapper = new ListScrapper();
scrapper.scrapDefaultList('https://universe.leagueoflegends.com/en_US/champion/azir/', 'li.champion_1xlO', 'h5');
