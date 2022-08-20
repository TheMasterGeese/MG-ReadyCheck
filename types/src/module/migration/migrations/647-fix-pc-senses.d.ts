import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Fix PC `senses` properties, misshapen by some mysterious source */
export declare class Migration647FixPCSenses extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
