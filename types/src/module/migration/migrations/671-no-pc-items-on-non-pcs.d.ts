import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Remove PC-only items from non-PCs */
export declare class Migration671NoPCItemsOnNonPCs extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
