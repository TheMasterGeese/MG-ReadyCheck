import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Ensure presence of all three save types on NPCs */
export declare class Migration625EnsurePresenceOfSaves extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
