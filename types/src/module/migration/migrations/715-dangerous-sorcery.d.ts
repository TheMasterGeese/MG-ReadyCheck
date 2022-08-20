import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration715DangerousSorcery extends MigrationBase {
    static override: any;
    version: number;
    private dangerousSorcery;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
