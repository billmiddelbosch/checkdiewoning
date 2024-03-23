<template>
  <div class="a-verify-input">
    <label v-if="inputLabel" class="a-verify-input__label">{{inputLabel}}</label>
    <input class="a-verify-input__field" type="text" maxlength="6" />
    <span></span><span></span>
  </div>
</template>

<script>
export default {
  name: 'AVerifyInput',

  props: {
    inputLabel: {
      type: String,
      default: 'Verificatiecode',
      required: false
    }
  }

}
</script>

<style lang="sass" scoped>
  @use '../../../assets/sass/colors' as colors
  @use '../../../assets/sass/mixins' as mixins
  @use '../../../assets/sass/typography' as typography
  @use '../../../common/assets/sass/vendor/bootstrap/custom-variables' as variables

  .a-verify-input
    width: 100%
    overflow: hidden
    position: relative
    padding-bottom: 0.25rem
    margin-bottom: 2.5rem

    &__label
      color: colors.$ui-8
      margin-bottom: 0.5rem

    &__field
      display: inline-block
      all: unset
      appearance: textfield
      color: colors.$ui-8
      font-size: typography.$font-2
      width: 100%
      letter-spacing: 1.3438rem
      padding-left: 0.375rem

      @media (min-width: #{map-get(variables.$grid-breakpoints, 'lg')})
        letter-spacing: 3.75rem
        padding-left: 1.25rem

    span,
    span::before,
    span::after
      position: absolute
      bottom: 0
      width: 2rem
      height: 1px
      background: colors.$ui-8

      @media (min-width: #{map-get(variables.$grid-breakpoints, 'lg')})
        width: 3.75rem

    span::before,
    span::after
      content: ''

    span
      &::before
        left: 2.625rem

        @media (min-width: #{map-get(variables.$grid-breakpoints, 'lg')})
          left: 5rem

      &::after
        left: 5.25rem

        @media (min-width: #{map-get(variables.$grid-breakpoints, 'lg')})
          left: 10rem

      &:first-of-type
        left: 0

      &:last-of-type
        left: 7.875rem

        @media (min-width: #{map-get(variables.$grid-breakpoints, 'lg')})
          left: 15rem
</style>
