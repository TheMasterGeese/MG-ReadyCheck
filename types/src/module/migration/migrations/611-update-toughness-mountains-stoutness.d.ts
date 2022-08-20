import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
export declare class Migration611UpdateToughnessMountainsStoutness extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    requiresFlush: boolean;
    private featSlugs;
    private featsPromise;
    constructor();
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
