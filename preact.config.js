import path from "path";
import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin";

export default {
  webpack(config, env, helpers, options) {
    config.module.rules.find((rule) => {
      return (rule.oneOf || []).find((item) => {
        if (item.loader && item.loader.indexOf("file-loader") >= 0) {
          item.exclude.push(/\.wasm$/);
          return true;
        }
      });
    });

    config.plugins = (config.plugins || []).concat([
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "./engine"),
        // extraArgs: "--no-typescript",
        outDir: path.resolve(__dirname, "./src/engine"),
      }),
    ]);
  },
};
