import { ActorSourcePF2e } from "@actor/data";
import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
export declare class Migration674StableHomebrewTagIDs extends MigrationBase {
    static override: any;
    version: number;
    private homebrewKeys;
    private homebrewTags;
    private updateDocumentTags;
    override: any;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    override: any;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
    override: any;
    migrate(): Promise<void>;
}
