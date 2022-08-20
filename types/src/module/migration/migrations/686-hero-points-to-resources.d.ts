import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Move hero points from attributes to resources */
export declare class Migration686HeroPointsToResources extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
