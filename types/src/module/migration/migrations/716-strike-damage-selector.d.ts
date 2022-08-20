import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration716StrikeDamageSelector extends MigrationBase {
    static override: any;
    version: number;
    private itemsToSkip;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
