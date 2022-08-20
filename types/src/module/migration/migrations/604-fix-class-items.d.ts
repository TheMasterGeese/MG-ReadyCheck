import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration604FixClassItem extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(item: ItemSourcePF2e & {
        data: Record<string, unknown>;
    }): Promise<void>;
}
