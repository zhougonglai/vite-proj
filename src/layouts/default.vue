<template lang="pug">
header.flex.items-center.justify-between.px-4
  img.logo(
    src="../assets/img/index/logo@2x.png",
    srcset="../assets/img/index/logo@3x.png 3x"
  )
section.flex-1
  router-view
footer.weui-footer.py-2
  p.weui-footer__text 鄂ICP备18023477号@武汉奇妙网络科技有限公司
</template>
<script>
export default {
  name: "default-layout",
};
</script>

<style lang="scss" scoped>
header {
  height: 44px;
}
.logo {
  width: 116px;
  height: 31px;
}
</style>
