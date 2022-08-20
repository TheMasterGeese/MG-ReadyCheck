/// <reference types="jquery" />
import { CreatureSheetPF2e } from "@actor/creature/sheet";
import { FamiliarPF2e } from "@actor/familiar";
import { ActorSheetDataPF2e } from "@actor/sheet/data-types";
import { FamiliarSheetData } from "./types";
/**
 * @category Actor
 */
export declare class FamiliarSheetPF2e extends CreatureSheetPF2e<FamiliarPF2e> {
    /** There is currently no actor config for familiars */
    protected readonly actorConfigClass: null;
    static override: any;
    get defaultOptions(): ActorSheetOptions;
    override: any;
    get template(): string;
    override: any;
    getData(options?: ActorSheetOptions): Promise<FamiliarSheetData>;
    protected override: any;
    prepareItems(_sheetData: ActorSheetDataPF2e<FamiliarPF2e>): void;
    override: any;
    activateListeners($html: JQuery): void;
}
