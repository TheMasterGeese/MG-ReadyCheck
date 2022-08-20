import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration711HeritageItems extends MigrationBase {
    static override: any;
    version: number;
    private isHeritageFeature;
    private officialAncestries;
    private heritagesWithoutAncestryInName;
    private ancestrySlugs;
    private heritageFromFeat;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemSource: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void>;
}
