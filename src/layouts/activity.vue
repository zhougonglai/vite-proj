<template lang="pug">
header.flex.items-center.justify-between.px-4.absolute.w-full
  router-link(to="/")
    img.logo(
      src="/src/assets/img/activitys/logo-w@2x.png",
      srcset="/src/assets/img/activitys/logo-w@3x.png 3x"
    )
router-view
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
