import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove brokenThreshold property left undeleted in `Migration728FlattenPhysicalProperties` */
export declare class Migration736RemoveBrokenThreshold extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
