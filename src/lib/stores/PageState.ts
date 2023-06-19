import { writable } from 'svelte/store'

interface PageState {
    path?: string
}

const defaultPageState: PageState = {}

export const pageState = writable<PageState>(defaultPageState)
