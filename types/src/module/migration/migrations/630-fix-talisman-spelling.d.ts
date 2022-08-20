import { MigrationBase } from "../base";
import { ItemSourcePF2e } from "@item/data";
/** Fix spelling of the "talisman" `consumableType` */
export declare class Migration630FixTalismanSpelling extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
