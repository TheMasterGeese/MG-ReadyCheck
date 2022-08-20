import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Remove duplicate magic schools localization map */
export declare class Migration621RemoveConfigSpellSchools extends MigrationBase {
    static override: any;
    version: number;
    private KEY_MAP;
    private reassignSchool;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
