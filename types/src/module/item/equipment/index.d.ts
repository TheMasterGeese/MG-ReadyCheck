import { PhysicalItemPF2e } from "../physical";
import { EquipmentData } from "./data";
import { OtherEquipmentTag } from "./types";
declare class EquipmentPF2e extends PhysicalItemPF2e {
    get otherTags(): Set<OtherEquipmentTag>;
    override: any;
    prepareBaseData(): void;
    override: any;
    prepareActorData(): void;
    override: any;
    getChatData(this: Embedded<EquipmentPF2e>, htmlOptions?: EnrichHTMLOptions): Record<string, unknown>;
    override: any;
    generateUnidentifiedName({ typeOnly }?: {
        typeOnly?: boolean;
    }): string;
}
interface EquipmentPF2e {
    readonly data: EquipmentData;
}
export { EquipmentPF2e };
