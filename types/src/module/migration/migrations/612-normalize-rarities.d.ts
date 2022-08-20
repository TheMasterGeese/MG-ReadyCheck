import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
export declare class Migration612NormalizeRarities extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
