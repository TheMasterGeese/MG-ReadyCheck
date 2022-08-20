import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { Migration727TrimSelfRollOptions } from "./727-trim-self-roll-options";
/** Retire ToggleProperty rule element, converting them to toggleable RollOption ones */
export declare class Migration731TogglePropertyToRollOption extends Migration727TrimSelfRollOptions {
    #private;
    static override: any;
    version: number;
    protected override: any;
    optionPattern: RegExp;
    protected override: any;
    optionReplacement: string;
    override: any;
    updateItem(source: ItemSourcePF2e): Promise<void>;
    override: any;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
