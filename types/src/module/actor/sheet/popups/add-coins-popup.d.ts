import { ActorPF2e } from "@actor/base";
import { Coins } from "@item/physical/data";
interface AddCoinsFormData extends Coins {
    combineStacks: boolean;
}
/**
 * @category Other
 */
export declare class AddCoinsPopup extends FormApplication<ActorPF2e> {
    static override: any;
    get defaultOptions(): FormApplicationOptions;
    override: any;
    _updateObject(_event: Event, formData: Record<string, unknown> & AddCoinsFormData): Promise<void>;
}
export {};
