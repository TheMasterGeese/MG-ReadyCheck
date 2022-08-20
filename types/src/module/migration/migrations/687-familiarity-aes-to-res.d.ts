import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Convert weapon familiarity `ActiveEffect`s to Rule Elements */
export declare class Migration687FamiliarityAEsToREs extends MigrationBase {
    static override: any;
    version: number;
    private isFamiliarityAE;
    private toRuleElement;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
