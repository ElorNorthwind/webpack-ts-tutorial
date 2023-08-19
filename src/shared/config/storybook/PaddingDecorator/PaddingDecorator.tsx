import { Story } from "@storybook/react";

export const PaddingDecorator =
  (padding: number | undefined) =>
  (StoreComponent: Story): JSX.Element => {
    const appliedPadding = padding || 20;
    return <div style={{ padding: appliedPadding }}>{<StoreComponent />}</div>;
  };
