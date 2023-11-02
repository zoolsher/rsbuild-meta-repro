import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    meta: {
      foo: "bar",
    },
    template: "./src/index.html",
  },
});
