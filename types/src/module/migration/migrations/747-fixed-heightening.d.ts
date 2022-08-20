import { SpellPF2e } from "@item";
import { ItemSourcePF2e, SpellData, SpellSource } from "@item/data";
import { MigrationBase } from "../base";
/** Handle spells gaining fixed level heightening */
export declare class Migration747FixedHeightening extends MigrationBase {
    #private;
    static override: any;
    version: number;
    override: any;
    updateItem(item: ItemSourcePF2e): Promise<void>;
    protected overwriteDamage(item: SpellSource, newItem: SpellData): void;
    protected loadSpells(): Promise<Record<string, SpellPF2e | undefined>>;
    fixedHeightenSpells: Set<any>;
}
