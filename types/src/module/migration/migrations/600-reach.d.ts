import { MigrationBase } from "../base";
import { ItemSourcePF2e } from "@item/data";
export declare class Migration600Reach extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(item: ItemSourcePF2e): Promise<void>;
}
