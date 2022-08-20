import { ActorType } from "@actor/data";
import { ItemPF2e } from "@item";
import { PredicatePF2e } from "@system/predication";
import { AELikeData, AELikeRuleElement, AELikeSource } from "./ae-like";
import { RuleElementOptions } from "./base";
declare class AdjustStrikeRuleElement extends AELikeRuleElement {
    protected static override: any;
    validActorTypes: ActorType[];
    private static VALID_PROPERTIES;
    /** The property of the strike to adjust */
    private property;
    /** The definition of the strike in terms of its item (weapon) roll options */
    private definition;
    constructor(data: AdjustStrikeSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    protected override: any;
    validateData(): void;
    /** Instead of applying the change directly to a property path, defer it to a synthetic */
    override: any;
    applyAELike(): void;
}
interface AdjustStrikeRuleElement extends AELikeRuleElement {
    data: AdjustStrikeData;
}
interface AdjustStrikeData extends Exclude<AELikeData, "path"> {
    /** Whether the actor is eligible to receive the strike adjustment */
    predicate: PredicatePF2e;
}
interface AdjustStrikeSource extends Exclude<AELikeSource, "path"> {
    property?: unknown;
    definition?: unknown;
}
export { AdjustStrikeRuleElement };
