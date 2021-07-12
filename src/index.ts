import { scrapDefaultList } from "./scrapper/scanners/ListScrapper";
import sc from "./scrapper/scanners/config.json";

const lang = "en_US";

scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.list.path}`, sc.champion.list.selector, sc.champion.list.name_tag);



