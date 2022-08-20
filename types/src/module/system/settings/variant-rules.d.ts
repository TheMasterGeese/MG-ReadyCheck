/// <reference types="jquery" />
export declare class VariantRulesSettings extends FormApplication {
    static override: any;
    get defaultOptions(): FormApplicationOptions;
    override: any;
    getData(): Promise<Record<string, {
        value: unknown;
        setting: SettingRegistration;
    }>>;
    static registerSettings(): void;
    override: any;
    activateListeners($html: JQuery): void;
    /**
     * Handle button click to reset default settings
     * @param event The initial button click event
     */
    private onResetDefaults;
    protected override: any;
    _onSubmit(event: Event, options?: OnSubmitFormOptions): Promise<Record<string, unknown>>;
    protected override: any;
    _updateObject(_event: Event, data: Record<string, unknown>): Promise<void>;
}
