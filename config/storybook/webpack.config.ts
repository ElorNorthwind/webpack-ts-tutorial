import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({
  config,
}: {
  config: webpack.Configuration;
}): webpack.Configuration => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push(".ts", ".tsx");

  // eslint-disable-next-line
  config.module!.rules = config.module!.rules!.map(
    // @ts-expect-error
    (rule: webpack.RuleSetRule) => {
      // eslint-disable-next-line
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    }
  );
  config.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );
  return config;
};
