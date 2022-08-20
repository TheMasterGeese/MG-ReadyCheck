import { RollInitiativeOptionsPF2e } from "@actor/data";
import { CombatantPF2e, RolledCombatant } from "./combatant";
export declare class EncounterPF2e extends Combat<CombatantPF2e> {
    get active(): boolean;
    /** Sort combatants by initiative rolls, falling back to tiebreak priority and then finally combatant ID (random) */
    protected override: any;
    _sortCombatants(a: Embedded<CombatantPF2e>, b: Embedded<CombatantPF2e>): number;
    /** A public method to access _sortCombatants in order to get the combatant with the higher initiative */
    getCombatantWithHigherInit(a: RolledCombatant, b: RolledCombatant): RolledCombatant | null;
    /** Exclude orphaned, loot-actor, and minion tokens from combat */
    override: any;
    createEmbeddedDocuments(embeddedName: "Combatant", data: PreCreate<foundry.data.CombatantSource>[], context?: DocumentModificationContext): Promise<Embedded<CombatantPF2e>[]>;
    /** Call hooks for modules on turn change */
    override: any;
    nextTurn(): Promise<this>;
    /** Roll initiative for PCs and NPCs using their prepared roll methods */
    override: any;
    rollInitiative(ids: string[], options?: RollInitiativeOptionsPF2e): Promise<this>;
    /** Set the initiative of multiple combatants */
    setMultipleInitiatives(initiatives: {
        id: string;
        value: number;
        overridePriority?: number | null;
    }[]): Promise<void>;
    /** Disable the initiative button on PC sheets if this was the only encounter */
    protected override: any;
    _onDelete(options: DocumentModificationContext, userId: string): void;
    /** Enable the initiative button on PC sheets */
    protected override: any;
    _onCreate(data: foundry.data.CombatSource, options: DocumentModificationContext, userId: string): void;
    /** Call onTurnStart for each rule element on the new turn's actor */
    protected override: any;
    _onUpdate(changed: DeepPartial<foundry.data.CombatSource>, options: DocumentModificationContext, userId: string): void;
}
export interface EncounterPF2e {
    readonly data: foundry.data.CombatData<this, CombatantPF2e>;
}
