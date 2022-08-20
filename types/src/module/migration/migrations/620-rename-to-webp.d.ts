import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration620RenameToWebp extends MigrationBase {
    static override: any;
    version: number;
    private regexp;
    private renameToWebP;
    private isABCK;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
    override: any;
    updateMacro(macroData: foundry.data.MacroSource): Promise<void>;
    override: any;
    updateTable(tableData: foundry.data.RollTableSource): Promise<void>;
    override: any;
    updateToken(tokenData: foundry.data.TokenSource): Promise<void>;
    override: any;
    updateUser(userData: foundry.data.UserSource): Promise<void>;
}
