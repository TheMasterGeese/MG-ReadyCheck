import { AmbientLightDocumentPF2e } from "@module/scene";
export declare class AmbientLightPF2e extends AmbientLight<AmbientLightDocumentPF2e> {
    /** Is this light actually a source of darkness? */
    get isDarkness(): boolean;
}
export interface AmbientLightPF2e {
}
