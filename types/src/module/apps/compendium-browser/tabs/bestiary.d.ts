import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { BestiaryFilters } from "./data";
export declare class CompendiumBrowserBestiaryTab extends CompendiumBrowserTab {
    protected index: string[];
    override: any;
    filterData: BestiaryFilters;
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    protected override: any;
    prepareFilterData(): void;
}
