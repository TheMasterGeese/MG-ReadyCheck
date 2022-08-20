import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Change RE formula data replacement to operate at actor and item instance levels */
export declare class Migration702REFormulasAtInstanceLevel extends MigrationBase {
    static override: any;
    version: number;
    protected raiseToInstanceLevel(value: string): string;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
