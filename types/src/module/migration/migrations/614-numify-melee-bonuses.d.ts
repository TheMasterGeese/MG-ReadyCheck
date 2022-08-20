import { MigrationBase } from "../base";
import { ItemSourcePF2e } from "@item/data";
/** Numify melee bonus.value property */
export declare class Migration614NumifyMeleeBonuses extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
