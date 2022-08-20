import { CheckRoll, CheckRollJSON } from "../roll";
export declare class StrikeAttackRoll extends CheckRoll {
    static override: any;
    CHAT_TEMPLATE: string;
    override: any;
    render(this: Rolled<StrikeAttackRoll>, options?: RollRenderOptions): Promise<string>;
    override: any;
    toJSON(): CheckRollJSON;
}
