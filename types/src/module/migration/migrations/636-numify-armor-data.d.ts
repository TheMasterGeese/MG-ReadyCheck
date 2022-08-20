import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration636NumifyArmorData extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
