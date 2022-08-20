import { MigrationBase } from "../base";
import { ActorSourcePF2e } from "@actor/data";
/** Delete owned spells with no corresponding spellcastiong entry */
export declare class Migration632DeleteOrphanedSpells extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    requiresFlush: boolean;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
