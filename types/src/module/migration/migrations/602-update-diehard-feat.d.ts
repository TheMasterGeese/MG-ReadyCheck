import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
export declare class Migration602UpdateDiehardFeat extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    requiresFlush: boolean;
    private diehardPromise;
    constructor();
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
