import type { CssSize } from "../types/StyleTypes";
import type { CssColor } from "../types/ColorTypes";

export interface IRukaConfig {
    ui?: {
        topbar?: {
            marginHeight?: CssSize
            width?: CssSize
        }
        color?: {
            main?: CssColor
        }
    }
}