<template>
  <div>
    <transition name="fade">
      <div v-if="isVisible">
        <div class="overlay" @click="close()"></div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MOverlay',

  components: {},

  data () {
    return {}
  },

  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5); /*dim the background*/
}
</style>
