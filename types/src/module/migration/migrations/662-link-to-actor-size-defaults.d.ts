import { ActorPF2e } from "@actor";
import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Set default linkToActorSize flag */
export declare class Migration662LinkToActorSizeDefaults extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateToken(tokenSource: foundry.data.TokenSource, actor: ActorPF2e): Promise<void>;
}
