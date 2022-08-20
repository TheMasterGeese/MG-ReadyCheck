import { ItemTrait } from "@item/data/base";
import { EffectAreaSquare } from "@module/canvas/effect-area-square";
import { TokenAuraData } from "./types";
import { TokenDocumentPF2e } from "../document";
declare class TokenAura implements TokenAuraData {
    slug: string;
    radius: number;
    token: Embedded<TokenDocumentPF2e>;
    traits: Set<ItemTrait>;
    /** Does this aura affect its emanating token? */
    includesSelf: boolean;
    constructor(args: TokenAuraParams);
    private get scene();
    get bounds(): NormalizedRectangle;
    get center(): Point;
    get radiusPixels(): number;
    /** The squares covered by this aura */
    get squares(): EffectAreaSquare[];
    /** Does this aura overlap with (at least part of) a token? */
    containsToken(token: Embedded<TokenDocumentPF2e>): boolean;
    /**
     * Notify tokens' actors if they are inside an aura in this collection
     * @param [specific] A limited list of tokens whose actors will be notified
     */
    notifyActors(specific?: TokenDocumentPF2e[]): Promise<void>;
}
interface TokenAuraParams {
    slug: string;
    radius: number;
    token: Embedded<TokenDocumentPF2e>;
    traits: Set<ItemTrait>;
    includesSelf: boolean;
}
export { TokenAura, TokenAuraData };
