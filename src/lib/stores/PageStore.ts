import { writable } from 'svelte/store'
import { Page } from "../../typescript/enums/Page"

interface PageStore {
    path?: string
    page: Page
}

const defaultPageState: PageStore = {
    page: Page.FileExplorer
}

export const pageStore = writable<PageStore>(defaultPageState)
