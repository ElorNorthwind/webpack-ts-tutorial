import { Story } from "@storybook/react";
import { Suspense } from "react";

export const SuspenceDecorator = (StoreComponent: Story): JSX.Element => {
  return <Suspense fallback={"Загрузка"}>{<StoreComponent />}</Suspense>;
};
