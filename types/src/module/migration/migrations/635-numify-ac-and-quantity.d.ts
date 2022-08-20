import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Ensure AC and quantity values are numeric */
export declare class Migration635NumifyACAndQuantity extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
