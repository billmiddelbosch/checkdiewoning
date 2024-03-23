<template>
  <div :class="$_selectFieldClasses">
    <label :class="$_labelClasses">
      <div class="a-selectfield__field">
        <select
          :disabled="disabled"
          v-model="selected"
          :class="$_selectClasses"
        >
          <option v-if="placeholder" disabled selected>
            {{ placeholder }}
          </option>
          <option
            v-for="(option, index) in options"
            :value="option.value"
            :disabled="option.disabled"
            :key="`ASELECT_${index}_${option.label}`"
          >
            {{ option.label }}
          </option>
        </select>
        <AIcon
          class="a-selectfield__iconState"
          v-if="state"
          :icon="$_iconName"
        ></AIcon>
      </div>
    </label>
    <div class="a-selectfield__msg" v-if="msg">{{ msg }}</div>
  </div>
</template>

<script>
import AIcon from '../../Atoms/AIcon'

export default {
  name: 'Select',
  components: { AIcon },
  props: {
    size: {
      default: 'normal',
      type: String,
      validator: (value) => {
        return ['small', 'normal', 'large'].indexOf(value) !== -1
      }
    },

    color: {
      default: 'orange-accessible',
      type: String
    },

    placeholder: {
      default: null,
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null,
      validator: (value) => {
        return [null, 'error', 'correct'].includes(value)
      }
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    isFullWidth: {
      default: false,
      type: Boolean
    }
  },

  data () {
    return {
      selected: null
    }
  },

  mounted () {
    if (this.placeholder) {
      this.selected = this.placeholder
    }
  },

  watch: {
    selected (newVal) {
      this.$emit('change', newVal)
    }
  },
  computed: {
    // Return an object containing all active classes
    $_classes () {
      return ''
    },
    $_selectClasses () {
      const baseClass = 'a-selectfield__field'

      return {
        [baseClass]: true
      }
    },
    $_selectFieldClasses () {
      const baseClass = 'a-selectfield'
      const inputStates = {
        error: 'error',
        correct: 'correct'
      }
      const { color, size, isActive, isFullWidth } = this

      return {
        [baseClass]: true,
        [`${baseClass}--${size}`]: true,
        [`${baseClass}--${color}`]: true,
        [`${baseClass}--${inputStates[this.state]}`]: this.state,
        [`${baseClass}--active`]: isActive,
        [`${baseClass}--is-full-width`]: isFullWidth
      }
    },
    $_labelClasses () {
      const baseClass = 'a-selectfield__container'

      return {
        [baseClass]: true
      }
    },

    $_iconName () {
      const icons = {
        error: 'exclamation-circle',
        correct: 'check-circle-fill'
      }

      return this.state ? icons[this.state] : null
    }
  }
}
</script>

<style lang="sass" scoped>
@use '../../../assets/sass/colors' as colors
@use '../../../assets/sass/mixins' as mixins
@use '../../../assets/sass/variables' as vars

.a-selectfield
  $self: &

  @include mixins.base-font
  @include mixins.font-size-little
  display: block
  margin-bottom: vars.$spacer-2

  &__iconState
    color: colors.$blue

  &__iconLeft
    color: colors.$blue
    transform: translateX(-#{vars.$spacer-1})
    margin-right: vars.$spacer-1
  &__iconRight
    color: colors.$blue
    transform: translateX(vars.$spacer-1)
    margin-left: vars.$spacer-1

  &__container
    display: block
    max-width: 100%
    margin-bottom: vars.$spacer-1

  &__label
    display: block

  &__field
    @include mixins.base-font
    display: flex
    align-items: center
    width: 100%
    border-radius: vars.$border-radius-default
    border: 1px solid colors.$ui-3
    background-color: colors.$white
    padding: 0 vars.$spacer-3
    color: colors.$ui-8

    select
      flex: 1
      padding: vars.$spacer-2 0
      border: none
      outline: 0
      color: colors.$ui-8
      &::placeholder
        color: colors.$ui-5

      &::disabled
        cursor: not-allowed

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none
      &[type="number"]
        -moz-appearance: textfield

      option
        line-height: 1.5

  &__msg
    @include mixins.font-size-tiny
    margin-top: vars.$spacer-1

  // states
  &--error
    #{$self}__field,
    #{$self}__msg,
    #{$self}__input
      border-color: colors.$danger
    #{$self}__msg,
    #{$self}__iconState
      color: colors.$danger

  &--correct
    #{$self}__field,
    #{$self}__msg,
    #{$self}__input
      border-color: colors.$forest-accessible
    #{$self}__msg,
    #{$self}__iconState
      color: colors.$forest-accessible

  &--active
    #{$self}__field,
    #{$self}__msg,
    #{$self}__input
      border-color: colors.$blue
    #{$self}__iconState
      color: colors.$blue

  &--disabled
    opacity: .5

  &--vertical
    #{$self}__label
      margin-bottom: vars.$spacer-1

  &--horizontal
    #{$self}__container
      display: flex
      justify-content: flex-start
      align-items: center
      width: 100%
    #{$self}__label
      margin-right: vars.$spacer-2
</style>

<!-- <style lang="sass" scoped>
@use '../../../assets/sass/colors' as colors
@use '../../../assets/sass/mixins' as mixins
@use '../../../assets/sass/variables' as vars

.a-select
  $self: &

  @include mixins.base-font
  @include mixins.font-size-little

  appearance: none

  background-color: red
  border: 1px solid colors.$ui-3
  border-radius: 4px

  padding: 0px
  padding-right: 25px

  /*Arrow*/
  background: url("data:image/svg+xml;utf8,<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'><path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z'/></svg>")
  background-size: 10px
  background-position: calc(100% - 7px) center
  background-repeat: no-repeat

  &:focus
    border: 1px solid colors.$blue
    outline: 1px

  &:active
    border: 1px solid colors.$ui-3

  &--is-full-width
    width: 100%
    justify-content: center

  &__msg
    @include mixins.font-size-tiny
      margin-top: vars.$spacer-1

    // states
    &--error
      #{$self}__field,
      #{$self}__msg,
      #{$self}__input
        border-color: colors.$danger
      #{$self}__msg,
      #{$self}__iconState
        color: colors.$danger

    &--correct
      #{$self}__field,
      #{$self}__msg,
      #{$self}__input
        border-color: colors.$forest-accessible
      #{$self}__msg,
      #{$self}__iconState
        color: colors.$forest-accessible

    &--active
      #{$self}__field,
      #{$self}__msg,
      #{$self}__input
        border-color: colors.$blue
      #{$self}__iconState
        color: colors.$blue

    &--disabled
      opacity: .5

    &--vertical
      #{$self}__label
        margin-bottom: vars.$spacer-1

    &--horizontal
      #{$self}__container
        display: flex
        justify-content: flex-start
        align-items: center
        width: 100%
      #{$self}__label
        margin-right: vars.$spacer-2
</style>-->
