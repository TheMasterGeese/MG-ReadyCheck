/// <reference types="jquery" />
import { SpellPF2e } from "@item/spell";
import { ItemSheetPF2e } from "../sheet/base";
import { ItemSheetDataPF2e } from "../sheet/data-types";
import { SpellSystemData } from "./data";
import { SheetOptions } from "@module/sheet/helpers";
export declare class SpellSheetPF2e extends ItemSheetPF2e<SpellPF2e> {
    override: any;
    getData(options?: Partial<DocumentSheetOptions>): Promise<SpellSheetData>;
    static override: any;
    get defaultOptions(): DocumentSheetOptions;
    override: any;
    get title(): string;
    override: any;
    activateListeners($html: JQuery): void;
    protected override: any;
    _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
    protected override: any;
    _onDragStart(event: ElementDragEvent): void;
    protected override: any;
    _onDrop(event: ElementDragEvent): Promise<void>;
    private formatSpellComponents;
    private getAvailableHeightenLevels;
    private getOverlayFromEvent;
    prepareHeighteningLevels(): SpellSheetOverlayData[];
}
interface SpellSheetData extends ItemSheetDataPF2e<SpellPF2e> {
    isCantrip: boolean;
    isFocusSpell: boolean;
    isRitual: boolean;
    isVariant: boolean;
    variants: {
        name: string;
        id: string;
        sort: number;
        actions: string;
    }[];
    magicSchools: ConfigPF2e["PF2E"]["magicSchools"];
    spellCategories: ConfigPF2e["PF2E"]["spellCategories"];
    spellLevels: ConfigPF2e["PF2E"]["spellLevels"];
    spellTypes: ConfigPF2e["PF2E"]["spellTypes"];
    damageCategories: ConfigPF2e["PF2E"]["damageCategories"];
    damageSubtypes: ConfigPF2e["PF2E"]["damageSubtypes"];
    spellComponents: string[];
    rarities: SheetOptions;
    areaSizes: ConfigPF2e["PF2E"]["areaSizes"];
    areaTypes: ConfigPF2e["PF2E"]["areaTypes"];
    heightenIntervals: number[];
    heightenOverlays: SpellSheetOverlayData[];
    canHeighten: boolean;
}
interface SpellSheetOverlayData {
    id: string | null;
    /** Base path to the property, dot delimited */
    base: string;
    /** Base path to the spell override data, dot delimited. Currently this is the same as base */
    dataPath: string;
    level: number;
    data: Partial<SpellSystemData>;
    type: "heighten";
    heightenLevels: number[];
    missing: {
        key: keyof SpellSystemData;
        label: string;
    }[];
}
export {};
