export declare class GhostTemplate extends MeasuredTemplate {
    moveTime: number;
    private _onMouseMove;
    private _onLeftClick;
    override: any;
    _onMouseWheel: (event: WheelEvent) => void;
    override: any;
    destroy(options?: boolean | PIXI.IDestroyOptions): void;
    drawPreview(): Promise<void>;
    activatePreviewListeners(): void;
}
