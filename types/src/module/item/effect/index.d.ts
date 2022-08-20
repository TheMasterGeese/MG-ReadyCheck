import { UserPF2e } from "@module/user";
import { ItemPF2e } from "../base";
import { EffectData } from "./data";
declare class EffectPF2e extends ItemPF2e {
    static DURATION_UNITS: Readonly<Record<string, number>>;
    get level(): number;
    get isExpired(): boolean;
    get totalDuration(): number;
    get remainingDuration(): {
        expired: boolean;
        remaining: number;
    };
    /** Does this effect originate from an aura? */
    get fromAura(): boolean;
    override: any;
    prepareBaseData(): void;
    /** Set a self roll option for this effect */
    override: any;
    prepareActorData(this: Embedded<EffectPF2e>): void;
    /** Include a trimmed version of the "slug" roll option (e.g., effect:rage instead of effect:effect-rage) */
    override: any;
    getRollOptions(prefix?: string): string[];
    /** Set the start time and initiative roll of a newly created effect */
    protected override: any;
    _preCreate(data: PreDocumentId<this["data"]["_source"]>, options: DocumentModificationContext<this>, user: UserPF2e): Promise<void>;
    protected override: any;
    _preUpdate(changed: DeepPartial<this["data"]["_source"]>, options: DocumentModificationContext<this>, user: UserPF2e): Promise<void>;
    /** Show floaty text when this effect is created on an actor */
    protected override: any;
    _onCreate(data: this["data"]["_source"], options: DocumentModificationContext<this>, userId: string): void;
    /** Show floaty text when this effect is deleted from an actor */
    protected override: any;
    _onDelete(options: DocumentModificationContext, userId: string): void;
}
interface EffectPF2e {
    readonly data: EffectData;
}
export { EffectPF2e };
