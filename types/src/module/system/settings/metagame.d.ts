import { PartialSettingsData, SettingsMenuPF2e } from "./menu";
declare type ConfigPF2eListName = typeof MetagameSettings.SETTINGS[number];
export declare class MetagameSettings extends SettingsMenuPF2e {
    static override: any;
    readonly namespace = "metagame";
    static override: any;
    readonly SETTINGS: readonly ["showDC", "showResults", "tokenSetsNameVisibility", "secretDamage", "secretCondition", "partyVision"];
    protected static override: any;
    get settings(): Record<ConfigPF2eListName, PartialSettingsData>;
}
export {};
