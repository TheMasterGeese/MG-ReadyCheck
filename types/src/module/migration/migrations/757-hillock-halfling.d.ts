import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Add recovery bonus to Hillock Halfling heritage */
export declare class Migration757HillockHalfling extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
