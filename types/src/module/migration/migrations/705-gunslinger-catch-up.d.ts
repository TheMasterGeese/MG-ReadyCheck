import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Catch up Gunslinger class features with newly-included REs */
export declare class Migration705GunslingerCatchUp extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
