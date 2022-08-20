/// <reference types="jquery" />
import { TabData, PackInfo, TabName, TabType } from "./data";
import { SpellcastingEntryPF2e } from "@item";
declare class PackLoader {
    loadedPacks: {
        Actor: Record<string, {
            pack: CompendiumCollection;
            index: CompendiumIndex;
        } | undefined>;
        Item: Record<string, {
            pack: CompendiumCollection;
            index: CompendiumIndex;
        } | undefined>;
    };
    loadPacks(documentType: "Actor" | "Item", packs: string[], indexFields: string[]): AsyncGenerator<{
        pack: CompendiumCollection<CompendiumDocument>;
        index: CompendiumIndex;
    } | undefined, void, unknown>;
    /** Set art provided by a module if any is available */
    private setModuleArt;
}
export declare class CompendiumBrowser extends Application {
    settings: Omit<TabData<Record<string, PackInfo | undefined>>, "settings">;
    dataTabsList: readonly ["action", "bestiary", "equipment", "feat", "hazard", "spell"];
    tabs: Record<Exclude<TabName, "settings">, TabType>;
    packLoader: PackLoader;
    activeTab: TabName;
    navigationTab: Tabs;
    /** An initial filter to be applied upon loading a tab */
    private initialFilter;
    private initialMaxLevel;
    constructor(options?: {});
    override: any;
    get title(): string;
    static override: any;
    get defaultOptions(): any;
    override: any;
    _render(force?: boolean, options?: RenderOptions): Promise<void>;
    /** Reset initial filtering */
    override: any;
    close(options?: {
        force?: boolean;
    }): Promise<void>;
    private initCompendiumList;
    loadSettings(): void;
    hookTab(): void;
    openTab(tab: TabName, filter?: string[], maxLevel?: number): Promise<void>;
    openSpellTab(entry: SpellcastingEntryPF2e, level?: number | null): Promise<void>;
    loadTab(tab: TabName): Promise<void>;
    loadedPacks(tab: TabName): string[];
    override: any;
    activateListeners($html: JQuery): void;
    /** Activate click listeners on loaded actors and items */
    private activateResultListeners;
    private takePhysicalItem;
    private buyPhysicalItem;
    private getPhysicalItem;
    protected override: any;
    _canDragStart(): boolean;
    protected override: any;
    _canDragDrop(): boolean;
    /** Set drag data and lower opacity of the application window to reveal any tokens */
    protected override: any;
    _onDragStart(event: ElementDragEvent): void;
    protected override: any;
    _onDragOver(event: ElementDragEvent): void;
    injectActorDirectory(): void;
    override: any;
    getData(): {
        user: Active<import("../../user").UserPF2e>;
        settings: Omit<TabData<Record<string, PackInfo | undefined>>, "settings">;
        scrollLimit?: undefined;
    } | {
        [x: string]: number | Active<import("../../user").UserPF2e> | {
            filterData: import("./tabs/data").ActionFilters | import("./tabs/data").BestiaryFilters | import("./tabs/data").EquipmentFilters | import("./tabs/data").FeatFilters | import("./tabs/data").HazardFilters | import("./tabs/data").SpellFilters;
            indexData: CompendiumIndexData[];
        };
        user: Active<import("../../user").UserPF2e>;
        scrollLimit: number;
        settings?: undefined;
    } | {
        user: Active<import("../../user").UserPF2e>;
        settings?: undefined;
        scrollLimit?: undefined;
    };
    private resetFilters;
    private clearScrollLimit;
}
export {};
