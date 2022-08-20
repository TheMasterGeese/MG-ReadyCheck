/// <reference types="jquery" />
import { ScenePF2e } from ".";
export declare class SceneConfigPF2e<TScene extends ScenePF2e> extends SceneConfig<TScene> {
    /** Hide Unrestricted Vision Range settings when rules-based vision is enabled */
    override: any;
    activateListeners($html: JQuery): void;
}
