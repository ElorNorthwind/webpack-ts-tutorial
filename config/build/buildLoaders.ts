import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: "asset/resource",
  };
  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  return [
    svgrLoader,
    fileLoader,
    codeBabelLoader,
    tsxBabelLoader,
    // babelLoader,
    // typescriptLoader,
    cssLoader,
  ];
}
