import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Move ancestry vision features from independent items to system data on ancestry items */
export declare class Migration670AncestryVision extends MigrationBase {
    static override: any;
    version: number;
    private DARKVISION_ID;
    private LOWLIGHTVISION_ID;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    /** Only update independent world items */
    override: any;
    updateItem(itemSource: ItemSourcePF2e, actor?: ActorSourcePF2e): Promise<void>;
    private setAncestryVision;
}
