import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration658MonkUnarmoredProficiency extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
