import { writable } from "svelte/store";
import type { IRukaConfig } from "../../typescript/interfaces/IRukaConfig";

export const defaultConfig: IRukaConfig = {
    ui: {
        topbar: {
            height: "40px"
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
