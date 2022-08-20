import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Change several AdjustStrike rule elements to modify weapon traits rather than action traits */
export declare class Migration752StrikeVsWeaponTraits extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
