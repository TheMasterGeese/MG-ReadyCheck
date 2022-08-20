import { FeatSlotLevel } from "@actor/character/feats";
import { SaveType } from "@actor/types";
import { ABCItemPF2e, FeatPF2e } from "@item";
import { ZeroToFour } from "@module/data";
import { ClassData } from "./data";
declare class ClassPF2e extends ABCItemPF2e {
    get attacks(): {
        simple: ZeroToFour;
        martial: ZeroToFour;
        advanced: ZeroToFour;
        unarmed: ZeroToFour;
        other: {
            name: string;
            rank: ZeroToFour;
        };
    };
    get defenses(): {
        unarmored: ZeroToFour;
        light: ZeroToFour;
        medium: ZeroToFour;
        heavy: ZeroToFour;
    };
    get classDC(): ZeroToFour;
    get hpPerLevel(): number;
    get perception(): ZeroToFour;
    get savingThrows(): Record<SaveType, ZeroToFour>;
    get grantedFeatSlots(): {
        ancestry: FeatSlotLevel[];
        class: number[];
        skill: number[];
        general: number[];
    };
    /** Include all class features in addition to any with the expected location ID */
    override: any;
    getLinkedFeatures(): Embedded<FeatPF2e>[];
    override: any;
    prepareBaseData(): void;
    /** Prepare a character's data derived from their class */
    override: any;
    prepareActorData(this: Embedded<ClassPF2e>): void;
}
interface ClassPF2e {
    readonly data: ClassData;
}
export { ClassPF2e };
