export type CssUnit =
    "px"
    | "em"
    | "rem"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "%"
    | "cm"
    | "mm"
    | "in"
    | "pt"
    | "pc"
    | "ex"
    | "ch"
    | "fr"

/**
 * @description A string that represents a css size value
 */
export type CssSize = `${number}${CssUnit}`