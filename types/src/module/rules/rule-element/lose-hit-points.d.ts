import { ItemPF2e } from "@item";
import { RuleElementPF2e, RuleElementSource } from "./";
import { RuleElementOptions } from "./base";
/** Reduce current hit points without applying damage */
export declare class LoseHitPointsRuleElement extends RuleElementPF2e {
    constructor(data: RuleElementSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    override: any;
    onCreate(actorUpdates: Record<string, unknown>): void;
}
export interface LoseHitPointsRuleElement extends RuleElementPF2e {
}
