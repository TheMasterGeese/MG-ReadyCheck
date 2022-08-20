/// <reference types="jquery" />
import { ActorSheetPF2e } from "@actor/sheet/base";
import { ActorSheetDataPF2e } from "@actor/sheet/data-types";
import { HazardPF2e } from ".";
import { HazardSheetData } from "./types";
/** In development version of the hazard sheet. */
export declare class HazardSheetGreenPF2e extends ActorSheetPF2e<HazardPF2e> {
    static override: any;
    get defaultOptions(): ActorSheetOptions;
    override: any;
    get template(): string;
    override: any;
    get title(): string;
    get editing(): boolean;
    override: any;
    getData(): Promise<HazardSheetData>;
    private prepareActions;
    private prepareSaves;
    override: any;
    prepareItems(sheetData: ActorSheetDataPF2e<HazardPF2e>): void;
    override: any;
    activateListeners($html: JQuery): void;
}
