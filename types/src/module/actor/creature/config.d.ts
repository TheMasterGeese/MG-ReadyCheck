import { SheetOptions } from "@module/sheet/helpers";
import { CreaturePF2e } from ".";
/** A DocumentSheet presenting additional, per-actor settings */
declare abstract class CreatureConfig<TActor extends CreaturePF2e> extends DocumentSheet<TActor> {
    override: any;
    get title(): string;
    override: any;
    get template(): string;
    get actor(): TActor;
    static override: any;
    get defaultOptions(): DocumentSheetOptions;
    override: any;
    getData(options?: Partial<DocumentSheetOptions>): Promise<CreatureConfigData<TActor>>;
    /** Remove stored property if it's set to default; otherwise, update */
    override: any;
    _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface CreatureConfigData<TActor extends CreaturePF2e> extends DocumentSheetData<TActor> {
    alliances: SheetOptions;
}
export { CreatureConfig, CreatureConfigData };
