<template lang="pug">
.draw-content.grid.grid-cols-3.gap-4
  .draw-item(v-for="item in items.slice(0, items.length / 2)") {{ item.name }}
  .draw-btn
  .draw-item(v-for="item in items.slice(items.length / 2, items.length)") {{ item.name }}
</template>

<script>
export default {
  props: ["items"],
};
</script>
