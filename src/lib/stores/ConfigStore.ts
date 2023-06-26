import { writable } from "svelte/store"
import type { IRukaConfig, IRukaUIConfig } from "../../typescript/interfaces/IRukaConfig"

export const defaultUIConfig: IRukaUIConfig = {
    topbar: {
        marginHeight: "40px",
        width: "70vw"
    },
    color: {
        main: "rgba(221, 187, 221, 0.45)",
    }
}

export const defaultConfig: IRukaConfig = {
    ui: defaultUIConfig,
}

/**
 * merge default config with given config and apply it to the store
 * @param config
 * @returns {IRukaConfig} merged config
 */
function applyDefaultConfig(config: IRukaConfig): IRukaConfig {
    const mergedConfig = {
        ...defaultConfig,
        ...config
    }
    rukaConfig.set(mergedConfig)
    return mergedConfig
}

export const rukaConfig = writable<IRukaConfig>(defaultConfig)
