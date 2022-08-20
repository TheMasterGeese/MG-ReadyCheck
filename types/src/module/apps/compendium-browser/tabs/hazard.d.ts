import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { HazardFilters } from "./data";
export declare class CompendiumBrowserHazardTab extends CompendiumBrowserTab {
    override: any;
    filterData: HazardFilters;
    protected index: string[];
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    protected override: any;
    prepareFilterData(): void;
}
