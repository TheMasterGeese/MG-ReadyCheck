import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Ensure `crafting` property in character system data has the correct structure */
export declare class Migration722CraftingSystemData extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
