import { MeasuredTemplateDocumentPF2e } from "@module/scene/measured-template-document";
declare class MeasuredTemplatePF2e extends MeasuredTemplate<MeasuredTemplateDocumentPF2e> {
    get type(): MeasuredTemplateType;
    /** The highlight layer for this template */
    get highlightId(): string;
    override: any;
    highlightGrid(): void;
}
interface MeasuredTemplatePF2e extends MeasuredTemplate<MeasuredTemplateDocumentPF2e> {
}
export { MeasuredTemplatePF2e };
