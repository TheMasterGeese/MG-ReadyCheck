import { SceneDataPF2e } from "./data";
import { SceneConfigPF2e } from "./sheet";
import { AmbientLightDocumentPF2e, MeasuredTemplateDocumentPF2e, TileDocumentPF2e, TokenDocumentPF2e } from ".";
declare class ScenePF2e extends Scene<AmbientLightDocumentPF2e, MeasuredTemplateDocumentPF2e, TileDocumentPF2e, TokenDocumentPF2e> {
    /** A promise to prevent concurrent executions of #checkAuras() */
    auraCheckLock?: Promise<void>;
    /** Is the rules-based vision setting enabled? */
    get rulesBasedVision(): boolean;
    get lightLevel(): number;
    get isBright(): boolean;
    get isDimlyLit(): boolean;
    get isDark(): boolean;
    /** Check for auras containing newly-placed or moved tokens */
    checkAuras(): Promise<void>;
    override: any;
    prepareData(): void;
    /** Toggle Unrestricted Global Vision according to scene darkness level */
    override: any;
    prepareBaseData(): void;
}
interface ScenePF2e {
    _sheet: SceneConfigPF2e<this> | null;
    readonly data: SceneDataPF2e<this>;
}
export { ScenePF2e };
