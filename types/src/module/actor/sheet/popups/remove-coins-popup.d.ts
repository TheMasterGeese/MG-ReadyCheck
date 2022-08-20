import { Coins } from "@item/physical/data";
import { ActorPF2e } from "@actor";
interface PopupFormData extends Coins {
    removeByValue: boolean;
}
/**
 * @category Other
 */
export declare class RemoveCoinsPopup extends FormApplication<ActorPF2e> {
    static override: any;
    get defaultOptions(): FormApplicationOptions;
    override: any;
    _updateObject(_event: Event, formData: Record<string, unknown> & PopupFormData): Promise<void>;
}
export {};
