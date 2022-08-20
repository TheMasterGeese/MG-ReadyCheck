/// <reference types="jquery" />
import { CharacterPF2e } from "@actor";
import { Abilities } from "@actor/creature/data";
import { AbilityString } from "@actor/types";
import { AncestryPF2e, BackgroundPF2e, ClassPF2e } from "@item";
export declare class AbilityBuilderPopup extends Application {
    private actor;
    constructor(actor: CharacterPF2e);
    static override: any;
    get defaultOptions(): ApplicationOptions;
    override: any;
    get id(): string;
    override: any;
    activateListeners($html: JQuery): void;
    override: any;
    getData(options?: Partial<FormApplicationOptions>): Promise<PopupData>;
    private calculateAncestryBoosts;
    private calculateBackgroundBoosts;
    private calculatedLeveledBoosts;
    private calculateBoostLabels;
    /** Remove this application from the actor's apps on close */
    override: any;
    close(options?: {
        force?: boolean;
    }): Promise<void>;
}
interface PopupData {
    actor: CharacterPF2e;
    abilityScores: Abilities;
    manualKeyAbility: AbilityString;
    abilities: Record<AbilityString, string>;
    ancestry: Embedded<AncestryPF2e> | null;
    background: Embedded<BackgroundPF2e> | null;
    class: Embedded<ClassPF2e> | null;
    manual: boolean;
    ancestryBoosts: AncestryBoosts | null;
    backgroundBoosts: BackgroundBoosts | null;
    keyOptions: AbilityString[] | null;
    levelBoosts: Record<number, LevelBoostData>;
    voluntaryFlaw: boolean;
}
interface BoostFlawState {
    lockedFlaw: boolean;
    lockedBoost: boolean;
    boosted: boolean;
    available: boolean;
    voluntaryFlaws: boolean;
    canVoluntaryFlaw: boolean;
    voluntaryBoost: boolean;
    canVoluntaryBoost: boolean;
}
declare type BoostFlawRow = Record<AbilityString, BoostFlawState>;
interface AncestryBoosts {
    boosts: BoostFlawRow;
    remaining: number;
    voluntaryBoostsRemaining: number;
    labels: string[];
    flawLabels: string[];
}
interface BackgroundBoosts {
    boosts: BoostFlawRow;
    remaining: number;
    labels: string[];
    tooltip: string | null;
}
interface LevelBoostData {
    boosts: {
        ability: string;
        taken: boolean;
    }[];
    full: boolean;
    eligible: boolean;
    remaining: number;
}
export {};
