<template>
  <hr :class="$_classes" />
</template>
<script>
export default {
  name: 'ADivider',

  props: {
    // The size of the divider bar.
    size: {
      default: 'md',
      type: String,
      validator: (value) => {
        return ['xs', 'sm', 'md'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-divider'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.size}`]: true,
        [`${baseClass}--has-margin`]: this.hasMargin
      }
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
