import { writable } from "svelte/store";
import type { IRukaState } from "../../typescript/interfaces/IRukaState";

export const rukaState = writable<IRukaState>({
    currentInput: "", // must be ""
    submittedInput: "not-initialized-value",
})
