import { RuleElementPF2e } from "./";
import { ActorType } from "@actor/data";
/**
 * @category RuleElement
 */
declare class BaseSpeedRuleElement extends RuleElementPF2e {
    protected static override: any;
    validActorTypes: ActorType[];
    override: any;
    beforePrepareData(): void;
}
interface BaseSpeedRuleElement extends RuleElementPF2e {
}
export { BaseSpeedRuleElement };
