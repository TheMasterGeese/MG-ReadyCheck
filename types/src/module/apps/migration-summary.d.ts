/// <reference types="jquery" />
/** A summary window that opens after a system migration completes */
export declare class MigrationSummary extends Application<MigrationSummaryOptions> {
    /** Is a remigration currently running? */
    private isRemigrating;
    constructor(options?: Partial<MigrationSummaryOptions>);
    override: any;
    get template(): string;
    static override: any;
    get defaultOptions(): any;
    override: any;
    getData(): MigrationSummaryData;
    override: any;
    activateListeners($html: JQuery): void;
}
interface MigrationSummaryOptions extends ApplicationOptions {
    troubleshoot: boolean;
}
interface MigrationSummaryData {
    options: MigrationSummaryOptions;
    systemVersion: string;
    latestSchemaVersion: number;
    actors: {
        successful: number;
        total: number;
    };
    items: {
        successful: number;
        total: number;
    };
    canRemigrate: boolean;
    helpResources: boolean;
}
export {};
