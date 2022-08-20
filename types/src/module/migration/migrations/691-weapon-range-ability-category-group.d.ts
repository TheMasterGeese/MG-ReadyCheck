import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Normalize weapon range to numeric or null, remove ability property, and let's do category and group too! */
export declare class Migration691WeaponRangeAbilityCategoryGroup extends MigrationBase {
    static override: any;
    version: number;
    private isOldGroupData;
    private isOldRangeData;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
