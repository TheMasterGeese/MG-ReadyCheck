/// <reference types="jquery" />
import { ActorSheetPF2e } from "../sheet/base";
import { VehiclePF2e } from "@actor/vehicle";
export declare class VehicleSheetPF2e extends ActorSheetPF2e<VehiclePF2e> {
    static override: any;
    get defaultOptions(): ActorSheetOptions;
    override: any;
    get template(): string;
    override: any;
    getData(): Promise<any>;
    protected prepareItems(sheetData: any): void;
    override: any;
    activateListeners($html: JQuery): void;
}
