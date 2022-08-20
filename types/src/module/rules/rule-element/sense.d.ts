import { RuleElementPF2e, RuleElementSource } from "./";
import { ActorType } from "@actor/data";
import { ItemPF2e } from "@item";
import { RuleElementOptions } from "./base";
/**
 * @category RuleElement
 */
export declare class SenseRuleElement extends RuleElementPF2e {
    protected static override: any;
    validActorTypes: ActorType[];
    constructor(data: SenseRuleElementSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    override: any;
    beforePrepareData(): void;
}
export interface SenseRuleElement {
}
interface SenseRuleElementSource extends RuleElementSource {
    acuity?: string;
    range?: string | number | null;
    force?: boolean;
}
export {};
