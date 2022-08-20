/// <reference types="jquery" />
import { ScenePF2e } from "@scene";
import { API as Slider } from "nouislider";
import "nouislider/dist/nouislider.min.css";
export declare class SceneDarknessAdjuster extends Application {
    static readonly instance: SceneDarknessAdjuster;
    private scene;
    slider?: Slider;
    static override: any;
    get defaultOptions(): ApplicationOptions;
    override: any;
    get template(): string;
    override: any;
    render(force: boolean | undefined, options: RenderOptions & {
        scene: ScenePF2e | null;
    }): Promise<this>;
    override: any;
    activateListeners($html: JQuery): void;
    onLightingRefresh(darkness: number): void;
}
