import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove rule elements from Panache class feature, add slugs to Vivacious Speed REs */
export declare class Migration764PanacheVivaciousREs extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
