import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { FeatFilters } from "./data";
export declare class CompendiumBrowserFeatTab extends CompendiumBrowserTab {
    override: any;
    filterData: FeatFilters;
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    protected override: any;
    prepareFilterData(): void;
}
