<template>
  <ol class="m-progress-steps">
    <li v-for="(item) in (steps)" :key="item.number" class="m-progress-steps__item" :class="{'m-progress-steps__item--disabled': item.status === 'disabled', 'm-progress-steps__item--current': item.status==='current'}">
      <span class="m-progress-steps__icon d-inline-flex justify-content-between align-items-center">
        <AIcon class="gs1-color-blue" icon="check-circle-fill" v-if="item.status === 'checked'" />
      </span>
      <span class="m-progress-steps__number" v-if="item.status !== 'checked'">{{ item.number }}</span>
      <span class="m-progress-steps__label" v-if="!hideLabels || item.status === 'current'" ><small>{{ item.label }}</small></span>
    </li>
  </ol>
</template>

<script>
import AIcon from '@/components/Atoms/AIcon'

export default {
  name: 'MProgressSteps',

  components: {
    AIcon
  },

  props: {

    hideLabels: {
      type: Boolean,
      default: false
    },

    steps: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  @use '../../../assets/sass/typography' as typo
  @use '../../../assets/sass/colors' as colors
  @use '../../../assets/sass/mixins' as mixins
  @use '../../../assets/sass/variables' as vars

  .m-progress-steps
    margin: 0
    padding: 0
    display: flex
    justify-content: center
    list-style: none
    pointer-events: none

    &__item
      margin: 0 vars.$spacer-2
      padding: 0
      display: inline-flex
      justify-content: center
      align-items: center

    &__item--disabled &__label,
    &__item--disabled &__number
      color: colors.$ui-5
      border-color: colors.$ui-5

    &__label
      @include mixins.font-size-little
      padding-left: vars.$spacer-2
      margin-right: vars.$spacer-1
      line-height: 1
      flex:1

      @media (min-width: #{map-get(vars.$grid-breakpoints, 'lg')})
        display: inline-block

    &__number
      height: vars.$icon-lg-height
      width: vars.$icon-lg-height

    &__number
      display: inline-flex
      justify-content: center
      align-items: center
      border: 1px solid colors.$blue
      border-radius: 100%
      font-size: typo.$font-size-tiny
      color: colors.$blue

    &__item--current &__number
      background-color: colors.$blue
      color: colors.$white

    &__icon
      fill: colors.$blue

</style>
