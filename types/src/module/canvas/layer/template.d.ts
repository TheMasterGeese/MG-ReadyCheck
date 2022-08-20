import { MeasuredTemplatePF2e } from "..";
export declare class TemplateLayerPF2e<TTemplate extends MeasuredTemplatePF2e = MeasuredTemplatePF2e> extends TemplateLayer<TTemplate> {
    /** Can be removed once https://gitlab.com/foundrynet/foundryvtt/-/issues/7132 is closed */
    override: any;
    _onDragLeftStart(event: PlaceablesLayerEvent<TTemplate>): Promise<TTemplate | void>;
    /** Originally by Furyspark for the PF1e system */
    protected override: any;
    _onDragLeftMove(event: PlaceablesLayerEvent<TTemplate>): void;
    protected override: any;
    _onMouseWheel(event: WheelEvent): Promise<TTemplate["document"] | undefined> | void;
}
