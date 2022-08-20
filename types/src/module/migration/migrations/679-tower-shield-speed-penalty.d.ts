import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Set a speed penalty of -5 on all tower shields, plus some basic tidying */
export declare class Migration679TowerShieldSpeedPenalty extends MigrationBase {
    static override: any;
    version: number;
    private towerShieldSlugs;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
