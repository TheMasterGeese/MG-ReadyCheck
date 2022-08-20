import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration739RecoveryCheckDC extends MigrationBase {
    static override: any;
    version: number;
    private toughness;
    private defyDeath;
    private mountainsStoutness;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
