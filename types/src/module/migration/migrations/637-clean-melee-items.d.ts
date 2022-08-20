import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove physical item data from melee items */
export declare class Migration637CleanMeleeItems extends MigrationBase {
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
