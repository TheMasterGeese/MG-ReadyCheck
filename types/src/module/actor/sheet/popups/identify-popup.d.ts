/// <reference types="jquery" />
import { IdentifyAlchemyDCs, IdentifyMagicDCs, GenericIdentifyDCs } from "@item/identification";
import { PhysicalItemPF2e } from "@item/physical";
export declare class IdentifyItemPopup extends FormApplication<PhysicalItemPF2e> {
    static override: any;
    get defaultOptions(): FormApplicationOptions;
    get item(): PhysicalItemPF2e;
    override: any;
    getData(): Promise<IdentifyPopupData>;
    override: any;
    activateListeners($form: JQuery<HTMLFormElement>): void;
    protected override: any;
    _updateObject(_event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface IdentifyPopupData extends FormApplicationData {
    isMagic: boolean;
    isAlchemical: boolean;
    dcs: GenericIdentifyDCs | IdentifyMagicDCs | IdentifyAlchemyDCs;
}
export {};
