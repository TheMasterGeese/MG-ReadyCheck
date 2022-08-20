import { MigrationBase } from "../base";
import { ItemSourcePF2e } from "@item/data";
/** Convert heritage "feats" be of type "heritage" */
export declare class Migration610SetHeritageFeatType extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
