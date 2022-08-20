import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Replace critical specialization roll notes with CritSpec RE */
export declare class Migration759CritSpecRE extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
