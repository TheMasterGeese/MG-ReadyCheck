import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Update the rule elements of the Laughing Shadow hybrid study, remove its presence from Arcane Cascade rules */
export declare class Migration738UpdateLaughingShadow extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
