import { IdentifyCreatureData } from "@module/recall-knowledge";
export declare class RecallKnowledgePopup extends Application {
    private data;
    static override: any;
    get defaultOptions(): any;
    constructor(options: Partial<ApplicationOptions>, data: IdentifyCreatureData);
    override: any;
    getData(): Promise<{
        specificLoreAttempts: string[];
        unspecificLoreAttempts: string[];
        skills: {
            name: string;
            attempts: string[];
        }[];
    }>;
    private padAttempts;
}
