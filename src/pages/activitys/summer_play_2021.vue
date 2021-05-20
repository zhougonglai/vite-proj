<template lang="pug">
section.header-block.flex.flex-col.items-center
  img(
    src="../../assets/img/home/summer_play_2021_header-title.png",
    alt="畅玩一夏"
  )
  p.text-2xl.text-white.my-4 充值抽送steam当红游戏
  .header-title 活动时间：5月27日—7月28日

  .pkg.mt-8.flex.justify-evenly.items-center.bg-white
    .pkg-label.font-bold
      .pkg-label-top 享1888小时
      .pkg-label-bottom 88元
    button.pkg-btn
section.grid-draw.flex.flex-col.items-center.mt-10
  .draw-title
    img(
      src="../../assets/img/home/summer_play_2021_title.png",
      alt="充值抽当红游戏，100%中奖"
    )
  .draw-content
    DrawGrid(:items="prizeList")
</template>
<script >
import { computed, onMounted, reactive } from "@vue/runtime-core";
import { useHead } from "@vueuse/head";
import { getActivity } from "~/service/activity";

const active_id = 393;
const prizeList = [
  {
    id: 462,
    name: "生化危机8:村庄",
    tips: "价值396元",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 463,
    name: "深海迷航:零度之下",
    tips: "价值99元",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 464,
    name: "<质量效应>传奇版",
    tips: "价值248元",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 466,
    name: "80港币",
    tips: "steam充值卡",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 469,
    name: "10小时",
    tips: "加速时长卡",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 468,
    name: "30小时",
    tips: "加速时长卡",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 467,
    name: "40港币",
    tips: "steam充值卡",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
  {
    id: 465,
    name: "生化变种",
    tips: "价值298元",
    img: await import("~/assets/img/home/summer_play_2021_data-village@2x.png"),
  },
];

export default {
  setup() {
    useHead({
      title: computed(() => "畅玩一夏"),
    });

    const activityData = reactive();
    const user = reactive();

    const getActivityInfo = async () => {
      const { data } = await getActivity(active_id, {
        id: active_id,
        type: 1,
        plat_type: 1,
        account_token: user.account_token,
      });
    };

    return {
      activityData,
      user,
      prizeList,
    };
  },
};
</script>

<style lang="scss" scoped>
section.header-block {
  img {
    margin-top: 240px;
    width: 284px;
    height: 81px;
  }

  .header-title {
    width: 250px;
    height: 35px;
    background-image: url("~/assets/img/home/summer_play_2021_label.png");
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    line-height: 35px;
    color: #599192;
    @media (min-resolution: 2dppx) {
      background-image: url("~/assets/img/home/summer_play_2021_label@2x.png");
    }
  }

  .pkg {
    width: 333px;
    height: 90px;
    border-radius: 12px;
    box-shadow: 0 0 8px 4px rgba(#599192, 0.32) inset;
    &-label {
      &-top {
        color: #599192;
        font-size: 13px;
      }

      &-bottom {
        color: #e47a3b;
        font-size: 33px;
        line-height: 33px;
      }
    }

    &-btn {
      width: 152px;
      height: 45px;
      background-image: url("~/assets/img/home/summer_play_2021_buy.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      @media (min-resolution: 2dppx) {
        background-image: url("~/assets/img/home/summer_play_2021_buy@2x.png");
      }
    }
  }
}

section.grid-draw {
  .draw {
    &-title {
      width: 354px;
      height: 45px;
    }
  }
}
</style>

<style lang="scss">
main#main {
  background-image: url("~/assets/img/home/summer_play_2021_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #43926d;
  @media (min-resolution: 2dppx) {
    background-image: url("~/assets/img/home/summer_play_2021_bg@2x.webp");
  }
}
</style>
