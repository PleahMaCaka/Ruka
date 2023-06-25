import { writable } from "svelte/store";
import type { IRukaConfig } from "../../typescript/interfaces/IRukaConfig";

export const defaultConfig: IRukaConfig = {
    ui: {
        topbar: {
            marginHeight: "40px"
        },
        color: {
            main: "rgba(221, 187, 221, 0.45)",
        }
    }
}

/**
 * merge default config with given config and apply it to the store
 * @param config
 * @returns {IRukaConfig} merged config
 */
function overrideDefaultConfig(config: IRukaConfig): IRukaConfig {
    const mergedConfig = {
        ...defaultConfig,
        ...config
    }
    rukaConfig.set(mergedConfig)
    return mergedConfig
}

export const rukaConfig = writable<IRukaConfig>(defaultConfig)
