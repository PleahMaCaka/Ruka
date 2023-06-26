import type { CssSize } from "../types/StyleTypes";
import type { CssColor } from "../types/ColorTypes";

export interface IRukaConfig {
    ui?: IRukaUIConfig
}

export interface IRukaUIConfig {
    topbar?: {
        marginHeight?: CssSize
        width?: CssSize
    }
    color?: {
        main?: CssColor
    }
}