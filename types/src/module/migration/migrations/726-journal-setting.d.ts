import { MigrationBase } from "../base";
/** Remove the journal theme setting, changing the default sheet according to the stored setting value */
export declare class Migration726JournalSetting extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    migrate(): Promise<void>;
}
