<template lang="pug">
router-link(to="/activitys/year_card")
  img(
    src="/src/assets/img/index/banner@2x.png",
    alt="banner",
    srcset="/src/assets/img/index/banner@3x.png 3x"
  )
.flex-1.p-4.grid.grid-cols-2.gap-4(v-if="packages.price")
  .box.flex.flex-col.items-center(
    v-for="(price, i) in packages.price.list",
    :key="price.id",
    :class="{ active: state.active === i, recommend: price.is_recommend }",
    @click="setActive(i)"
  )
    .box-title {{ price.title }}
    .box-price.text-2xl.mt-4
      small.text-sm ¥
      | {{ price.price / 100 }}
    .box-label {{ Number(price.price / 100 / price.extend_time).toFixed(2) }}/{{ price.extend_type === 1 ? '每月' : '每分钟' }}
    small.box-desc.mt-5 {{ price.desc }}

.notice.px-5.pb-20
  .notice-title 温馨提示
  ul.notice-list.mt-2
    li.notice-item.text-sm 1.奇妙加速器账号与微信端账号为同一账号，微信公众号购买的时长客户端也能使用；
    li.notice-item.text-sm.mt-2 2.因地区、宽带运营商、用户本地网络波动等不可抗因素，奇妙无法保证每个加速器用户网络延迟时间一致，请测试确认后再购买,因此奇妙不支持退款

.fixed.p-4.w-full.flex.items-center.justify-center.bottom-0(
  v-if="packages.price"
)
  button.pay-btn 支付 ¥{{ packages.price.list[state.active].price / 100 }}
</template>

<script>
import { onBeforeMount, onMounted, reactive } from "vue";
import { useHead } from "@vueuse/head";
import { useStore, mapState } from "vuex";
import { bowser } from "~/utils/ua";

const activity_id = 1;

export default {
  computed: {
    ...mapState("index", ["packages"]),
  },
  setup() {
    const store = useStore();
    useHead({
      title: "奇妙加速器",
    });
    const state = reactive({ active: 0 });
    onMounted(async () => {
      await store.dispatch("index/fetchPackagePrice", {
        activity_id,
        price_type: 0,
      });
    });

    const setActive = (i) => (state.active = i);

    return {
      state,
      setActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 164px;
  height: 178px;
  background: #f7f6fb;
  border: 1px solid #ebeaef;
  border-radius: 5px;
  padding: 18px 0;

  &.active {
    background-color: #fff8f2;
    border-color: #ff8335;
    box-shadow: 0 0 2.66667vw #e59f59;
  }

  &.recommend {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background-image: url("/src/assets/img/index/tag@2x.png");
      width: 53px;
      height: 23px;
      background-size: contain;
      background-position: top right;
      background-repeat: no-repeat;

      @media screen and (min-resolution: 3dppx) {
        background-image: url("/src/assets/img/index/tag@3x.png");
      }
    }
  }

  &-title {
    color: var(--FONT-2);
  }

  &-label {
    color: var(--weui-BG);
    text-align: center;
    width: 108px;
    height: 26px;
    background: linear-gradient(90deg, #ffa91f 0%, #ff6712 100%);
    opacity: 1;
    border-radius: 13px;
  }

  &-desc {
    color: var(--FONT-3);
  }
}

.notice {
  color: var(--FONT-3);
}

.pay-btn {
  width: 326px;
  height: 47px;
  background: linear-gradient(88deg, #7d59ff 0%, #9b66ff 100%);
  box-shadow: 0px 6px 16px rgba(133, 92, 255, 0.15);
  opacity: 1;
  border-radius: 24px;
  color: var(--weui-BG);
}

.fixed {
  background-color: var(--weui-BG);
}
</style>
