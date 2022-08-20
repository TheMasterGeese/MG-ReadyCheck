import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove bulwark armor rule elements */
export declare class Migration673RemoveBulwarkREs extends MigrationBase {
    static override: any;
    version: number;
    private hasRuleElement;
    override: any;
    updateItem(item: ItemSourcePF2e): Promise<void>;
}
