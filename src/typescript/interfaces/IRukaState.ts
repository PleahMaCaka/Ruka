import type { NotInited } from "../types/NotInited"

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
}