import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
export declare class Migration634PurgeMartialItems extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
