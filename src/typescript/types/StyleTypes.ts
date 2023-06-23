export type cssUnit =
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

export type cssSize = `${number}${cssUnit}`