/// <reference types="jquery" />
import { ActorSheetPF2e } from "../sheet/base";
import { LootPF2e } from "@actor/loot";
import { LootSheetDataPF2e } from "../sheet/data-types";
import { ItemPF2e } from "@item";
import { DropCanvasItemDataPF2e } from "@module/canvas/drop-canvas-data";
export declare class LootSheetPF2e extends ActorSheetPF2e<LootPF2e> {
    static override: any;
    get defaultOptions(): ActorSheetOptions;
    override: any;
    get template(): string;
    override: any;
    get isLootSheet(): boolean;
    override: any;
    getData(): Promise<LootSheetDataPF2e>;
    override: any;
    activateListeners($html: JQuery): void;
    protected prepareItems(): void;
    private distributeCoins;
    private lootNPCs;
    protected override: any;
    _onDropItem(event: ElementDragEvent, itemData: DropCanvasItemDataPF2e): Promise<ItemPF2e[]>;
}
