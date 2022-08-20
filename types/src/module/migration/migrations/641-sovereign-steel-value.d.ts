import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Fix precious material value of "sovereign steel" */
export declare class Migration641SovereignSteelValue extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
