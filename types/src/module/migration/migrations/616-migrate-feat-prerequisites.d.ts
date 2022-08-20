import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration616MigrateFeatPrerequisites extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
