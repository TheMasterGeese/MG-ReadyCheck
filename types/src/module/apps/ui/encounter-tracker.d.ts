/// <reference types="jquery" />
import { EncounterPF2e } from "@module/encounter";
import Sortable from "sortablejs";
export declare class EncounterTrackerPF2e extends CombatTracker<EncounterPF2e> {
    sortable: Sortable;
    /** Make the combatants sortable */
    override: any;
    activateListeners($html: JQuery): void;
    /** Allow CTRL-clicking to make the rolls blind */
    protected override: any;
    _onCombatControl(event: JQuery.ClickEvent<HTMLElement, HTMLElement, HTMLElement>): Promise<void>;
    /** Allow CTRL-clicking to make the roll blind */
    protected override: any;
    _onCombatantControl(event: JQuery.ClickEvent<HTMLElement, HTMLElement, HTMLElement>): Promise<void>;
    /** Handle the drop event of a dragged & dropped combatant */
    private onDropCombatant;
    private setInitiativeFromDrop;
    /** Save the new order, or reset the viewed order if no change was made */
    private saveNewOrder;
    /** Adjust the final order of combatants if necessary, keeping unrolled combatants at the bottom */
    private adjustFinalOrder;
    private validateDrop;
    /** Retrieve the (rolled) combatants in the real-time order as seen in the DOM */
    private getCombatantsFromDOM;
}
