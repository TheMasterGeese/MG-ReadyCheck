/// <reference types="jquery" />
import { ActorPF2e, CreaturePF2e } from "@actor";
import { ItemPF2e } from "@item";
/**
 * Implementation used to populate item summaries, toggle visibility
 * of item summaries, and save expanded/collapsed state of item summaries.
 */
export declare class ItemSummaryRendererPF2e<AType extends ActorPF2e> {
    constructor(sheet: Application & {}, get: any, actor: any);
}
export declare class CreatureSheetItemRenderer<AType extends CreaturePF2e> extends ItemSummaryRendererPF2e<AType> {
    override: any;
    renderItemSummary($div: JQuery, item: Embedded<ItemPF2e>, chatData: Record<string, unknown>): void;
}
