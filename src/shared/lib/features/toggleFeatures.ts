import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlags } from "./setFeatureFlags";

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  } else {
    return off();
  }
}
