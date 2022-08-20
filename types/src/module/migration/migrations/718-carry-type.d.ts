import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
/** Update physical item usage and equipped to reflect carry types (held, worn, stowed) */
export declare class Migration718CarryType extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemSourcePF2e, actor?: ActorSourcePF2e): Promise<void>;
}
