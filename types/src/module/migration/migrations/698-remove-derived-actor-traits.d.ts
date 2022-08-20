import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Remove alignment traits from PCs and NPCs, ancestry traits from PCs  */
export declare class Migration698RemoveDerivedActorTraits extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
