import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove maxTaken property from feats leftover from development */
export declare class Migration740MaxTakable extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
