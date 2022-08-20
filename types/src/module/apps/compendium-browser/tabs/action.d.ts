import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { ActionFilters } from "./data";
export declare class CompendiumBrowserActionTab extends CompendiumBrowserTab {
    override: any;
    filterData: ActionFilters;
    protected index: string[];
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    protected override: any;
    prepareFilterData(): void;
}
