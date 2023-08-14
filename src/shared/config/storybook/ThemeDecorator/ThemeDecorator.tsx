import { Story } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line fsd-lorans-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
// eslint-disable-next-line fsd-lorans-plugin/layer-imports
import "@/app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app story_wrapper ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
