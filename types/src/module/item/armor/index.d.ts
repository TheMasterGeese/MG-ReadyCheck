import { PhysicalItemHitPoints } from "@item/physical/data";
import { PhysicalItemPF2e } from "../physical";
import { ArmorCategory, ArmorData, ArmorGroup, BaseArmorType } from "./data";
declare class ArmorPF2e extends PhysicalItemPF2e {
    override: any;
    isStackableWith(item: PhysicalItemPF2e): boolean;
    get isShield(): boolean;
    get isArmor(): boolean;
    get baseType(): BaseArmorType | null;
    get group(): ArmorGroup | null;
    get category(): ArmorCategory;
    get dexCap(): number | null;
    get strength(): number | null;
    get checkPenalty(): number | null;
    get speedPenalty(): number;
    get acBonus(): number;
    get hitPoints(): PhysicalItemHitPoints;
    get hardness(): number;
    get isBroken(): boolean;
    get isDestroyed(): boolean;
    /** Given this is a shield, is it raised? */
    get isRaised(): boolean;
    /** Generate a list of strings for use in predication */
    override: any;
    getRollOptions(prefix?: string): string[];
    override: any;
    prepareBaseData(): void;
    override: any;
    prepareDerivedData(): void;
    override: any;
    prepareActorData(): void;
    override: any;
    getChatData(this: Embedded<ArmorPF2e>, htmlOptions?: EnrichHTMLOptions): Record<string, unknown>;
    override: any;
    generateUnidentifiedName({ typeOnly }?: {
        typeOnly?: boolean;
    }): string;
}
interface ArmorPF2e {
    readonly data: ArmorData;
}
export { ArmorPF2e };
