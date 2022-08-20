import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Normalize weapon range to numeric or null, remove ability property, and let's do category and group too! */
export declare class Migration692CraftingEntryFeatReplacement extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    requiresFlush: boolean;
    private slugToPromise;
    private replaceItem;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
