import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => Story): JSX.Element => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
