import { ActorType } from "@actor/data";
import { ItemPF2e } from "@item";
import { RuleElementPF2e, RuleElementSource, RuleElementOptions } from "./";
/**
 * @category RuleElement
 * Increase the creature's size
 */
export declare class CreatureSizeRuleElement extends RuleElementPF2e {
    protected static override: any;
    validActorTypes: ActorType[];
    constructor(data: CreatureSizeConstructionData, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    private static wordToAbbreviation;
    private static incrementMap;
    private static decrementMap;
    private incrementSize;
    private decrementSize;
    override: any;
    beforePrepareData(): void;
}
export interface CreatureSizeRuleElement extends RuleElementPF2e {
}
interface CreatureSizeConstructionData extends RuleElementSource {
    resizeEquipment?: boolean;
}
export {};
