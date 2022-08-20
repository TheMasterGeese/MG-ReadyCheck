import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
export declare class Migration624RemoveTokenEffectIconFlags extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    override: any;
    updateToken(tokenData: foundry.data.TokenSource): Promise<void>;
}
