import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Ensure "backpack" weapons and alchemical bombs have correct reload times */
export declare class Migration753WeaponReloadTimes extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
