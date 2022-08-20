import { ActorSourcePF2e } from "@actor/data";
import { MigrationBase } from "../base";
/** Ensure that a vehicle's dimensions are `number`s */
export declare class Migration661NumifyVehicleDimensions extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
