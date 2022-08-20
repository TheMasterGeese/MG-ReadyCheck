import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
/** Convert EffectTarget REs into ChoiceSets */
export declare class Migration745EffectTargetToChoiceSet extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(source: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void>;
}
