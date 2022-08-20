import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Clean up after bug overhauling cumulative item bonuses */
export declare class Migration729CumulativeItemBonusCleanup extends MigrationBase {
    #private;
    static override: any;
    version: number;
    private isExplorersClothing;
    private isStanceEffectOrAnimalSkinFeat;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
