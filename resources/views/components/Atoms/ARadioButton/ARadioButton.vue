<template>
  <input type="radio" class="radio" :checked="checked" />
</template>

<script>
export default {
  components: {},
  props: {
    checked: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      paymentMethod: null
    }
  },

  methods: {},

  computed: {}
}
</script>
<style scoped>
</style>
