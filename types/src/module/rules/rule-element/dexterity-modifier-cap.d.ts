import { ActorType } from "@actor/data";
import { RuleElementPF2e } from "./";
/**
 * @category RuleElement
 */
declare class DexterityModifierCapRuleElement extends RuleElementPF2e {
    protected static override: any;
    validActorTypes: ActorType[];
    override: any;
    beforePrepareData(): void;
}
interface DexterityModifierCapRuleElement extends RuleElementPF2e {
}
export { DexterityModifierCapRuleElement };
