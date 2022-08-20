/// <reference types="jquery" />
import { HeritagePF2e } from "@item";
import { ItemSheetPF2e } from "@item/sheet/base";
import { HeritageSheetData } from "@item/sheet/data-types";
export declare class HeritageSheetPF2e extends ItemSheetPF2e<HeritagePF2e> {
    static override: any;
    get defaultOptions(): DocumentSheetOptions;
    override: any;
    getData(options?: Partial<DocumentSheetOptions>): Promise<HeritageSheetData>;
    override: any;
    activateListeners($html: JQuery): void;
    override: any;
    _onDrop(event: ElementDragEvent): Promise<void>;
}
