import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration744MigrateSpellHeighten extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(item: ItemSourcePF2e): Promise<void>;
}
