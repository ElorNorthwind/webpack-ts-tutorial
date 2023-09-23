import { setFeatureFlags } from "@/shared/lib/features";
import { FeatureFlags } from "@/shared/types/featureFlags";
import { Story } from "@storybook/react";

export const FeatureFlagsDecorator =
  (features: FeatureFlags) =>
  (StoreComponent: Story): JSX.Element => {
    setFeatureFlags(features);
    return <StoreComponent />;
  };
