/// <reference types="jquery" />
import { ActorPF2e } from "@actor";
import { TagSelectorBase } from "./base";
import { SelectableTagField } from ".";
export declare class WeaknessSelector extends TagSelectorBase<ActorPF2e> {
    override: any;
    objectProperty: string;
    static override: any;
    get defaultOptions(): import("./base").TagSelectorOptions & {
        template: string;
        title: string;
    };
    private get actor();
    protected get configTypes(): readonly SelectableTagField[];
    override: any;
    getData(): any;
    override: any;
    activateListeners($html: JQuery): void;
    protected override: any;
    _updateObject(_event: Event, formData: Record<string, unknown>): Promise<void>;
    protected getUpdateData(formData: Record<string, unknown>): Record<string, unknown>[];
}
