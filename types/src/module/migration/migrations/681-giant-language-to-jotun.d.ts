import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Replace the "Giant" language with "Jotun" */
export declare class Migration681GiantLanguageToJotun extends MigrationBase {
    static override: any;
    version: number;
    private replaceGiant;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
