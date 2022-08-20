import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Add Adjust Modifier REs to Mighty Bulwark to suppress dexterity and standard bulwark modifiers */
export declare class Migration754MightyBulwarkAdjustModifiers extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
