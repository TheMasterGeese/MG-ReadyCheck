import { ActorType } from "@actor/data";
import { ItemPF2e } from "@item";
import { WeaponDamage } from "@item/weapon/data";
import { BaseWeaponType, WeaponCategory, WeaponGroup, WeaponTrait } from "@item/weapon/types";
import { RuleElementData, RuleElementPF2e, RuleElementSource } from "./";
import { RuleElementOptions } from "./base";
/**
 * Create an ephemeral strike on an actor
 * @category RuleElement
 */
declare class StrikeRuleElement extends RuleElementPF2e {
    #private;
    protected static override: any;
    validActorTypes: ActorType[];
    override: any;
    slug: string;
    category: WeaponCategory;
    group: WeaponGroup;
    baseType: BaseWeaponType | null;
    range: {
        increment: number;
        max: number | null;
    } | null;
    constructor(data: StrikeSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    override: any;
    beforePrepareData(): void;
    /** Exclude other strikes if this rule element specifies that its strike replaces all others */
    override: any;
    afterPrepareData(): void;
    private constructWeapon;
}
interface StrikeRuleElement {
    data: StrikeData;
}
interface StrikeSource extends RuleElementSource {
    img?: unknown;
    category?: unknown;
    group?: unknown;
    baseType?: unknown;
    damage?: unknown;
    range?: unknown;
    maxRange?: unknown;
    traits?: unknown;
    replaceAll?: unknown;
    replaceBasicUnarmed?: unknown;
    options?: unknown;
}
interface StrikeData extends RuleElementData {
    slug?: string;
    img?: ImagePath;
    damage?: {
        base?: WeaponDamage;
    };
    traits: WeaponTrait[];
    replaceAll: boolean;
    replaceBasicUnarmed: boolean;
    options?: string[];
}
export { StrikeRuleElement };
