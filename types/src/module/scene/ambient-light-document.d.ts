import { ScenePF2e } from ".";
declare class AmbientLightDocumentPF2e extends AmbientLightDocument {
    /** Is this light actually a source of darkness? */
    get isDarkness(): boolean;
}
interface AmbientLightDocumentPF2e extends AmbientLightDocument {
    readonly data: foundry.data.AmbientLightData<AmbientLightDocumentPF2e>;
    readonly parent: ScenePF2e | null;
}
export { AmbientLightDocumentPF2e };
