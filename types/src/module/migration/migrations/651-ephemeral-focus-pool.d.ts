import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Don't store the max value of the focus pool */
export declare class Migration651EphemeralFocusPool extends MigrationBase {
    static override: any;
    version: number;
    private needsRuleElement;
    private increasesByOne;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
