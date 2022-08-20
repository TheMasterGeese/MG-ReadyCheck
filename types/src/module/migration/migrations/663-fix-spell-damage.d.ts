import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Damage can now be split into multiple rows for spells */
export declare class Migration663FixSpellDamage extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
