import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Convert rations to a consumable with seven uses */
export declare class Migration684RationsToConsumable extends MigrationBase {
    static override: any;
    version: number;
    private rationsSourceId;
    private rationsPromise;
    private isOldRations;
    /** Get all references to the Rations item in a kit */
    private getRationRefs;
    /** Swap "equipment" rations for new consumable */
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    /** Lower the quantity of rations contained in kits */
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
