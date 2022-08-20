import { RuleElementPF2e, RuleElementOptions } from "../";
import { BattleFormSource } from "./types";
import { ActorType } from "@actor/data";
import { ItemPF2e, WeaponPF2e } from "@item";
import { DiceModifierPF2e, ModifierPF2e } from "@actor/modifiers";
export declare class BattleFormRuleElement extends RuleElementPF2e {
    overrides: this["data"]["overrides"];
    /** The label given to modifiers of AC, skills, and strikes */
    modifierLabel: string;
    protected static override: any;
    validActorTypes: ActorType[];
    constructor(data: BattleFormSource, item: Embedded<ItemPF2e>, options?: RuleElementOptions);
    static defaultIcons: Record<string, ImagePath | undefined>;
    /** Fill in base override data */
    private initialize;
    /** Pre-clear other rule elements on this item as being compatible with the battle form */
    override: any;
    preCreate({ itemSource }: RuleElementPF2e.PreCreateParams): Promise<void>;
    /** Set temporary hit points */
    override: any;
    onCreate(actorUpdates: Record<string, unknown>): void;
    override: any;
    beforePrepareData(): void;
    override: any;
    afterPrepareData(): void;
    /** Remove temporary hit points */
    override: any;
    onDelete(actorUpdates: Record<string, unknown>): void;
    private setRollOptions;
    /** Override the character's AC and ignore speed penalties if necessary */
    private prepareAC;
    /** Add new senses the character doesn't already have */
    private prepareSenses;
    /** Adjust the character's size category */
    private prepareSize;
    /** Add, replace and/or adjust non-land speeds */
    private prepareSpeeds;
    private prepareSkills;
    /** Clear out existing strikes and replace them with the form's stipulated ones, if any */
    private prepareStrikes;
    /** Immunity, weakness, and resistance */
    private prepareIWR;
    /** Disable ineligible check modifiers */
    private suppressModifiers;
    private suppressNotes;
    override: any;
    applyDamageExclusion(weapon: WeaponPF2e, modifiers: (DiceModifierPF2e | ModifierPF2e)[]): void;
}
export interface BattleFormRuleElement extends RuleElementPF2e {
}
