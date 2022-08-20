import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove the `invested` property from uninvestable item types */
export declare class Migration648RemoveInvestedProperty extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
