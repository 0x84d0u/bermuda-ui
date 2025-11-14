import { Config } from "./types";
import { DEFAULT_CONFIG } from "./default-config";

export function validateConfig(config: Partial<Config>): Config {
    if (config?.themes) {
        const values = config.themes.map(t => t.value);
        const duplicates = values.filter((v, i) => values.indexOf(v) !== i);
        if (duplicates.length > 0) {
            throw new Error(`Duplicate theme values: ${duplicates.join(', ')}`);
        }
    }
    return { ...DEFAULT_CONFIG, ...config };
}