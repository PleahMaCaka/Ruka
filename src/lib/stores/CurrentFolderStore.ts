import { writable } from 'svelte/store'

interface CurrentFolderStore {
    path?: string
}

const defaultFolderStoreValue: CurrentFolderStore = {}

export const currentFolderStore = writable<CurrentFolderStore>(defaultFolderStoreValue)
