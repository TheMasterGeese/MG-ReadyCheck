import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Change the "summon" creature trait to "summoned", correctly set "summon" trait on npc/hazard actions */
export declare class Migration695SummonToSummoned extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
