import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
/** Focus Points became an actor resource. Relies on items running after actor */
export declare class Migration649FocusToActor extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
