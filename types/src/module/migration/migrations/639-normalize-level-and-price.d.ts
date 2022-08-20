import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Normalize stringy level and price values */
export declare class Migration639NormalizeLevelAndPrice extends MigrationBase {
    static override: any;
    version: number;
    private coinSlugs;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
