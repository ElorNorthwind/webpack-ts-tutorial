import { FeatureFlags } from "@/shared/types/featureFlags";

// Реализация не предполагает реактивности! Если хочется менять фичи в течение сессии - надо выносить в стейт
let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
