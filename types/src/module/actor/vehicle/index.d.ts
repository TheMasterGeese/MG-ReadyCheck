import { ActorDimensions } from "@actor/types";
import { ItemType } from "@item/data";
import { UserPF2e } from "@module/user";
import { ActorPF2e } from "../base";
import { TokenDimensions, VehicleData, VehicleSource } from "./data";
export declare class VehiclePF2e extends ActorPF2e {
    override: any;
    get allowedItemTypes(): (ItemType | "physical")[];
    /** Vehicle dimensions are specified for all three axes and usually do not form cubes */
    override: any;
    get dimensions(): ActorDimensions;
    getTokenDimensions(dimensions?: Omit<ActorDimensions, "height">): TokenDimensions;
    override: any;
    prepareBaseData(): void;
    override: any;
    prepareDerivedData(): void;
    private prepareSaves;
    protected override: any;
    _preUpdate(changed: DeepPartial<VehicleSource>, options: DocumentModificationContext<this>, user: UserPF2e): Promise<void>;
}
export interface VehiclePF2e {
    readonly data: VehicleData;
}
