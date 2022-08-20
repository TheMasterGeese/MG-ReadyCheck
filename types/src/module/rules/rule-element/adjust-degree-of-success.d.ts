import { RuleElementPF2e, RuleElementData } from "./";
import { SkillAbbreviation } from "@actor/creature/data";
import { CheckDCModifiers } from "@system/degree-of-success";
/**
 * @category RuleElement
 */
declare class AdjustDegreeOfSuccessRuleElement extends RuleElementPF2e {
    override: any;
    afterPrepareData(): void;
    skillAbbreviationFromString(skill: string): SkillAbbreviation | undefined;
    isAdjustmentData(adjustment: CheckDCModifiers): boolean;
}
interface AdjustDegreeOfSuccessRuleElement {
    data: RuleElementData & {
        adjustment?: CheckDCModifiers;
    };
}
export { AdjustDegreeOfSuccessRuleElement };
