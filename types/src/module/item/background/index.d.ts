import { ABCItemPF2e } from "@item";
import { BackgroundData } from "./data";
declare class BackgroundPF2e extends ABCItemPF2e {
    /** Set a skill feat granted by a GrantItem RE as one of this background's configured items */
    override: any;
    prepareSiblingData(this: Embedded<BackgroundPF2e>): void;
    override: any;
    prepareActorData(this: Embedded<BackgroundPF2e>): void;
}
interface BackgroundPF2e {
    readonly data: BackgroundData;
}
export { BackgroundPF2e };
