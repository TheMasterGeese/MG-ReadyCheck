import { ItemPF2e } from "@item/base";
import { ActionData } from "./data";
import { OneToThree } from "@module/data";
import { UserPF2e } from "@module/user";
import { ActionCost, Frequency } from "@item/data/base";
export declare class ActionItemPF2e extends ItemPF2e {
    get actionCost(): ActionCost | null;
    get frequency(): Frequency | null;
    override: any;
    prepareData(): void;
    override: any;
    getChatData(this: Embedded<ActionItemPF2e>, htmlOptions?: EnrichHTMLOptions): {
        properties: string[];
        traits: import("../data").TraitChatData[];
        actionType: {
            value: "passive" | "action" | "reaction" | "free";
        };
        actionCategory: {
            value: string;
        };
        actions: {
            value: OneToThree | null;
        };
        requirements: {
            value: string;
        };
        trigger: {
            value: string;
        };
        deathNote: boolean;
        frequency?: Frequency | undefined;
        description: {
            value: string;
        };
        source: {
            value: string;
        };
        options?: {
            value: string[];
        } | undefined;
        rules: import("../../rules/rule-element/data").RuleElementSource[];
        slug: string | null;
        schema: import("@module/data").DocumentSchemaRecord;
    };
    protected override: any;
    _preUpdate(changed: DeepPartial<this["data"]["_source"]>, options: DocumentModificationContext<this>, user: UserPF2e): Promise<void>;
}
export interface ActionItemPF2e {
    readonly data: ActionData;
}
