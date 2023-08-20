import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/, // /\.[jt]sx?$/
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: ["@babel/preset-env"],
        plugins: [
          // [
          //   "i18next-extract",
          //   {
          //     nsSeparator: "~",
          //     locales: ["ru", "en"],
          //     keyAsDefaultValue: true,
          //   },
          // ],
          ["@babel/plugin-transform-typescript", { isTsx }],
          "@babel/plugin-transform-runtime",
          isProd && isTsx && [babelRemovePropsPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
