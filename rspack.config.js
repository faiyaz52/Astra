import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
const isDev = process.env.NODE_ENV === "development";
const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR"];

export default defineConfig({
  // entry: {
  // 	main: "./src/index.ts"
  // },
  entry: "./src/index.ts",
   output: {
      path: __dirname + '/dist',
      filename: '[name].js',
      library: {
        type: 'commonjs2', // can use 'commonjs2' if targeting Node
      },
      clean: true,
    },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "index.ts",
  //   library: {
  //     type: "module",
  //   },
  // },
  resolve: {
     extensions: ['.ts', '.tsx', '.js','.jsx'],
    // extensions: ["...", ".ts", ".tsx", ".jsx"],
    // extensions: ["...", ".tsx", ".js", ".jsx"],
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: "asset",
      }
    ],
  },
  experiments: {
    outputModule: true,
  },
});
