import { MigrationBase } from "../base";
/** Retire system token-hover settings in favor of Foundry's "Default Token Configuration" */
export declare class Migration694RetireSystemTokenSettings extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    migrate(): Promise<void>;
}
