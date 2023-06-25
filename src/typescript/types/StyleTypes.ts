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

export type CssSize = `${number}${CssUnit}`