/// <reference types="jquery" />
import { ActorPF2e } from "@actor/index";
import { TagSelectorBase } from "./base";
import { SelectableTagField } from ".";
export declare class SenseSelector extends TagSelectorBase<ActorPF2e> {
    override: any;
    objectProperty: string;
    static override: any;
    get defaultOptions(): import("./base").TagSelectorOptions & {
        template: string;
        title: string;
    };
    protected get configTypes(): readonly SelectableTagField[];
    override: any;
    getData(): any;
    override: any;
    activateListeners($html: JQuery): void;
    protected override: any;
    _updateObject(_event: Event, formData: SenseFormData): Promise<void>;
    protected getUpdateData(formData: SenseFormData): SenseUpdateData[];
}
declare type SenseFormData = Record<string, [boolean, string, string?] | boolean>;
interface SenseUpdateData {
    type: string;
    acuity?: string;
    value?: number;
}
export {};
