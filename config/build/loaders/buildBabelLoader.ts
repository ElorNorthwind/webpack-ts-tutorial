import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/, // /\.[jt]sx?$/
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              nsSeparator: "~",
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
          ["@babel/plugin-transform-typescript", { isTsx }],
          "@babel/plugin-transform-runtime",
          isTsx && [babelRemovePropsPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
