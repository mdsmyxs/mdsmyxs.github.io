import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "某地市民姚先生",
  description: "Mdsmyxs's Blog",

  plugins: [
     slimsearchPlugin({
       autoSuggest: true,
       indexContent: true,
     }),
  ],
  
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});