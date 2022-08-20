import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { EquipmentFilters, RangesData } from "./data";
export declare class CompendiumBrowserEquipmentTab extends CompendiumBrowserTab {
    override: any;
    filterData: EquipmentFilters;
    constructor(browser: CompendiumBrowser);
    protected override: any;
    loadData(): Promise<void>;
    protected override: any;
    filterIndexData(entry: CompendiumIndexData): boolean;
    override: any;
    parseRangeFilterInput(name: string, lower: string, upper: string): RangesData["values"];
    protected override: any;
    prepareFilterData(): void;
}
