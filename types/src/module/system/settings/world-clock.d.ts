/// <reference types="jquery" />
interface FormInputData extends Omit<SettingConfig, "config" | "namespace" | "scope"> {
    value: unknown;
    isSelect: boolean;
    isCheckbox: boolean;
    isDateTime: boolean;
}
interface TemplateData extends FormApplicationData {
    settings: FormInputData[];
}
interface UpdateData {
    dateTheme: string;
    timeConvention: boolean;
    playersCanView: boolean;
    syncDarkness: boolean;
    syncDarknessScene: boolean;
    worldCreatedOn: string;
    showClockButton: boolean;
}
export declare class WorldClockSettings extends FormApplication {
    static override: any;
    get defaultOptions(): FormApplicationOptions;
    override: any;
    getData(): TemplateData;
    /** Register World Clock settings */
    static registerSettings(): void;
    override: any;
    activateListeners($html: JQuery): void;
    protected override: any;
    _updateObject(_event: Event, data: Record<string, unknown> & UpdateData): Promise<void>;
    /** Settings to be registered and also later referenced during user updates */
    private static get settings();
}
export {};
