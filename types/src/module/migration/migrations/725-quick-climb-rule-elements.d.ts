import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Predicate rule elements related to crafting entries to protect against partial entry data getting created */
export declare class Migration725QuickClimbREs extends MigrationBase {
    static override: any;
    version: number;
    private quickClimb;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
