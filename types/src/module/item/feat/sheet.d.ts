/// <reference types="jquery" />
import { FeatPF2e } from "@item/feat";
import { FeatSheetData } from "../sheet/data-types";
import { ItemSheetPF2e } from "../sheet/base";
export declare class FeatSheetPF2e extends ItemSheetPF2e<FeatPF2e> {
    override: any;
    getData(options?: Partial<DocumentSheetOptions>): Promise<FeatSheetData>;
    override: any;
    activateListeners($html: JQuery<HTMLElement>): void;
    protected override: any;
    _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
