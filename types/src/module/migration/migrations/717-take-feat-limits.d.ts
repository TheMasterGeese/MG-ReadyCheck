import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Indicate whether a feat must be taken at level 1 or may only be taken a limited number of times */
export declare class Migration717TakeFeatLimits extends MigrationBase {
    static override: any;
    version: number;
    private levelOneOnly;
    private maxTakeable;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
