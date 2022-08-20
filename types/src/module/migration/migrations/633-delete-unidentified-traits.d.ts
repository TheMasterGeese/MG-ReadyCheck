import { ItemSourcePF2e } from "@item/data";
import { MigrationBase } from "../base";
declare type ItemDataWithIdentification = ItemSourcePF2e & {
    "data.-=identification"?: null;
    "data.identification.unidentified.data.-=traits"?: null;
};
/** OK, let's not store mystified traits. */
export declare class Migration633DeleteUnidentifiedTraits extends MigrationBase {
    static override: any;
    version: number;
    override: any;
    updateItem(itemData: ItemDataWithIdentification): Promise<void>;
}
export {};
