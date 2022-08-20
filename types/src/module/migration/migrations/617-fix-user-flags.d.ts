import { MigrationBase } from "../base";
export declare class Migration617FixUserFlags extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateUser(userData: foundry.data.UserSource): Promise<void>;
}
