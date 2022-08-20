import { ActorType } from "@actor/data";
import { AbilityString } from "@actor/types";
import { ItemPF2e } from "@item";
import { RuleElementPF2e, RuleElementSource } from "./";
import { RuleElementOptions } from "./base";
/**
 * @category RuleElement
 */
declare class FixedProficiencyRuleElement extends RuleElementPF2e {
    protected static override: any;
    validActorTypes: ActorType[];
    override: any;
    slug: string;
    ability: AbilityString | null;
    constructor(data: FixedProficiencySource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    override: any;
    beforePrepareData(): void;
    override: any;
    afterPrepareData(): void;
}
interface FixedProficiencyRuleElement {
}
interface FixedProficiencySource extends RuleElementSource {
    ability?: unknown;
    force?: unknown;
}
export { FixedProficiencyRuleElement };
