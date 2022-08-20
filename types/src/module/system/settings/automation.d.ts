import { PartialSettingsData, SettingsMenuPF2e } from "./menu";
declare type ConfigPF2eListName = typeof AutomationSettings.SETTINGS[number];
export declare class AutomationSettings extends SettingsMenuPF2e {
    static override: any;
    readonly namespace = "automation";
    static override: any;
    readonly SETTINGS: readonly ["rulesBasedVision", "effectExpiration", "removeExpiredEffects", "flankingDetection", "lootableNPCs"];
    protected static override: any;
    get settings(): Record<ConfigPF2eListName, PartialSettingsData>;
}
export {};
