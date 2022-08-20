import { TokenPF2e } from "@module/canvas";
import { TokenDocumentPF2e } from "..";
interface TokenAuraData {
    /** The radius of the aura, measured in feet from the boundary of a token's space */
    radius: number;
    /** The token from which this aura is emanating */
    token: TokenPF2e | TokenDocumentPF2e;
    /** The rectangle defining this aura's space */
    bounds: NormalizedRectangle;
}
export { TokenAuraData };
