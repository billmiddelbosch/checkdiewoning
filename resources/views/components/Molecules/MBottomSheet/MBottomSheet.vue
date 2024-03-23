<template>
  <div>
    <div class="bottomSheet"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'MBottomSheet',

  components: {},

  props: {},

  computed: {}
}
</script>
<style scoped>
.bottomSheet {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: -15px;

  background-color: #ffffff;
  border-radius: 12px;

  z-index: 11; /* 1px higher than the overlay layer */
}
</style>
