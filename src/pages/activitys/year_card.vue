<template lang="pug">
section
  .head.flex.flex-col.justify-end
    .package-block.flex.justify-end
      button.buy
    .title.flex.items-center.justify-center.mb-2
      img(src="/src/assets/img/activitys/year_card/t1@2x.png")
    .desc.text-sm.text-center.mb-2 在此页面或客户端购买年卡套餐均可获得1次抽奖机会
</template>


<style lang="scss" scoped>
section {
  background-image: url("/src/assets/img/activitys/year_card/head@2x.png"),
    url("/src/assets/img/activitys/year_card/bg@2x.png");
  background-size: 375px 677px, 375px 1038px;
  background-position: 0 0, 0 677px;
  background-repeat: no-repeat;
  height: 1715px;
}

.head {
  height: 400px;
  .package-block {
    margin-bottom: 0.85rem;
    padding-right: 2.2rem;
    button {
      width: 60px;
      height: 60px;
      background-image: url("/src/assets/img/activitys/year_card/buy@2x.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .title {
    img {
      width: 260px;
      height: 60px;
    }
  }
  .desc {
    color: var(--weui-WHITE);
  }
}
</style>


<route lang="yaml">
meta:
  layout: activity
</route>
