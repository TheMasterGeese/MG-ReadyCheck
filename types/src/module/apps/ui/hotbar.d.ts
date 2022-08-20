import { MacroPF2e } from "@module/macro";
declare class HotbarPF2e extends Hotbar<MacroPF2e> {
    /** Handle macro creation from non-macros */
    override: any;
    _onDrop(event: ElementDragEvent): Promise<void>;
    private hasRollOptionData;
    private createRollOptionToggleMacro;
}
export { HotbarPF2e };
