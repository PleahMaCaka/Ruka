import { writable } from "svelte/store"
import type { IRukaState } from "../../typescript/interfaces/IRukaState"
import { RukaPage } from "../../typescript/enums/RukaPage";

export const rukaState = writable<IRukaState>({
    currentInput: "", // must be ""
    submittedInput: "not-initialized-value",
    path: undefined,
    page: RukaPage.FileExplorer,
})
