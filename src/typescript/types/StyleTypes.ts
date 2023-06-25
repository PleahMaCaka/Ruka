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
 * if you can't define a size value, do like this: `${number}${CssUnit}` as CssSize
 */
export type CssSize = `${number}${CssUnit}`