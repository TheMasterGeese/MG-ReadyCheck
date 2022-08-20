import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { SpellFilters } from "./data";
export declare class CompendiumBrowserSpellTab extends CompendiumBrowserTab {
    override: any;
    filterData: SpellFilters;
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    protected override: any;
    prepareFilterData(): void;
}
