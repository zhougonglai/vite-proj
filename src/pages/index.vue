<template lang="pug">
section.flex-1
  .fab
    svg.icon(aria-hidden="true")
      use(xlink:href="#icon-qrcode")
  //- template(v-if="qrcode.value")
  //-   .weui-mask
  //-   .weui-half-screen-dialog.weui-half-screen-dialog_show
  //-     .weui-half-screen-dialog__hd
  //-       .weui-half-screen-dialog__hd__main
  //-         .weui-flex
  //-           img(
  //-             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
  //-           )
  //-           | 昵称
  //-     .weui-half-screen-dialog__bd bd
  //-     .weui-half-screen-dialog__ft ft
  .content
    .weui-cells__title 自我介绍
    .weui-cells
      .weui-cell
        .weui-cell__bd
          p 姓名
        .weui-cell__ft 周公来
      .weui-cell
        .weui-cell__bd
          p 年龄
        .weui-cell__ft 92年
      .weui-cell
        .weui-cell__bd
          p 身高
        .weui-cell__ft 178CM
      .weui-cell
        .weui-cell__bd
          p 体型
        .weui-cell__ft 偏瘦
    .weui-cells__title 基本信息
    .weui-cells
      .weui-cell
        .weui-cell__bd
          p 💼
        .weui-cell__ft IT / 互联网游戏
      .weui-cell
        .weui-cell__bd
          p 🎓
        .weui-cell__ft 专科
      .weui-cell
        .weui-cell__bd
          p 💰
        .weui-cell__ft 10-20万
      .weui-cell
        .weui-cell__bd
          p
            svg.icon(aria-hidden="true")
              use(xlink:href="#icon-icon_signin_line")
        .weui-cell__ft 洪山区花山软件新城
    article.weui-article
      h3 自我介绍
      p 先天内向性格.理科男、程序员.慢热型.有比较高的共情能力.会在逐渐熟悉之后会遵循一定模式建立亲密关系.（傲娇？！）
      p 平时喜欢看美剧、英剧和一些自媒体.回形针、漫剧速读、游戏解说.
      p 我的理想型是 性格温柔，能够换位思考，有一定独立能力.
      img(src="/src/assets/img/index/WechatIMG50.jpeg", alt="关于我")
</template>
<script>
import { useHead } from "@vueuse/head";
import { bowser } from "~/utils/ua";

export default {
  setup() {
    useHead({
      title: "关于我",
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
section.flex-1 {
  background-image: url("/src/assets/img/index/WechatIMG51.jpeg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100%;
  padding-top: 32vh;
  overflow-y: auto;

  .content {
    background-color: white;
    border-radius: 15px 15px 0 0;
    padding-top: 15px;
    padding-bottom: 15vh;
  }

  .fab {
    position: fixed;
    bottom: 15vh;
    right: 5vw;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 4px 6px 2px rgba($color: #000000, $alpha: 0.02),
      -1px 2px 4px 0 rgba($color: #000000, $alpha: 0.04),
      0 4px 4px 4px rgba($color: #000000, $alpha: 0.1);
    font-size: 2.5rem;
    padding: 8px;
    z-index: 5;
  }
}
</style>
