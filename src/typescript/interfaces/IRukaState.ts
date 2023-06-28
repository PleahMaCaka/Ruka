import type { NotInited } from "../types/NotInited"
import type { RukaPage } from "../enums/RukaPage";

export interface IRukaState {
    /**
     * This value is synchronized in real-time with the value entered by the user.
     * Therefore, there may be meaningless or strange values.
     */
    currentInput: string | NotInited

    /**
     * The value that the user submitted by pressing the enter key.
     */
    submittedInput: string | NotInited

    /**
     * The current page actually displayed to the user.
     */
    path?: string

    page: RukaPage
}