import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration646UpdateInlineLinks extends MigrationBase {
    static override: any;
    version: number;
    private updateCheckAttributes;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
