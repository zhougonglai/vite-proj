<template lang="pug">
section.flex-1
  .fab(@click="handleQrcode")
    svg.icon(aria-hidden="true")
      use(xlink:href="#icon-qrcode")
  .weui-mask(@click="handleQrcode", v-show="qrcode.value")
  .weui-half-screen-dialog(
    :class="{ 'weui-half-screen-dialog_show': qrcode.value }"
  )
    .weui-half-screen-dialog__bd
      img(src="../assets/img/index/WechatIMG54.jpeg", alt="qrcode")
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
          p
            svg.icon(aria-hidden="true")
              use(xlink:href="#icon-icon_signin_line")
        .weui-cell__ft 洪山区花山软件新城
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
          p 🏠
        .weui-cell__ft 祖传1套
      .weui-cell
        .weui-cell__bd
          p 🚗
        .weui-cell__ft 无
    article.weui-article
      h3 自我介绍
      p 先天内向性格.理科男、程序员.慢热型.有比较高的共情能力.会在逐渐熟悉之后会遵循一定模式建立亲密关系.（傲娇？！）
      p 平时喜欢看美剧、英剧和一些自媒体.回形针、漫剧、游戏解说.等沉浸类故事.
      p 我的理想型是 能够换位思考,有独立能力.有经营夫妻关系的理念. (互联网相关工作加分)
      img(src="../assets/img/index/WechatIMG50.jpeg", alt="双十一多余的红包🧧换的小饰品")
      p 双十一多余的红包🧧换的小饰品
      img(
        src="../assets/img/index/WechatIMG100.jpeg",
        alt="镜子🪞怎么可以这么脏...不会自拍🤳"
      )
      p 镜子🪞怎么可以这么脏...不会自拍🤳
</template>
<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    const head = reactive({
      title: "关于我",
      description: `92年,理工男`,
    });
    const qrcode = reactive({ value: false });
    useHead({
      title: head.title,
      meta: [
        {
          name: "description",
          content: head.description,
        },
      ],
    });
    const handleQrcode = () => {
      qrcode.value = !qrcode.value;
    };

    return {
      qrcode,
      handleQrcode,
    };
  },
};
</script>

<style lang="scss" scoped>
section.flex-1 {
  background-image: url("~/assets/img/index/WechatIMG51.jpeg");
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

  .avatar {
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }

  .weui-half-screen-dialog {
    transform: translateY(100%);
    transition: transform 0.3s;
    &.weui-half-screen-dialog_show {
      transform: translateY(0);
    }
  }
}
</style>
