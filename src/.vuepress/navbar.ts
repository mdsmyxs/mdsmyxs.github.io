import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  "/resources/",
  {
    text: "友链",
    icon: "link",
    children: [
      { text: "蓝奏云", icon: "cloud", link: "https://www.lanzou.com/" },
      { text: "火龙果", icon: "link", link: "dragonfruit" },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
