<template>
  <component :is="listType" :class="$_classes">
    <li
      v-for="(item, index) in listData"
      :key="`LISTITEM_${index}_${item.toLowerCase()}`"
    >
      <AIcon class="m-list__icon" :icon="iconName" v-if="type === 'icon'" />
      <span>{{ item }}</span>
    </li>
  </component>
</template>

<script>
import AIcon from '@/components/Atoms/AIcon'

export default {
  name: 'AList',

  components: {
    AIcon
  },

  props: {
    type: {
      default: 'ul',
      type: String,
      validator: (value) => {
        return ['ul', 'ol', 'icon'].indexOf(value) !== -1
      }
    },

    listData: {
      default: null,
      required: true
    },

    iconName: {
      type: String
    }
  },

  computed: {
    // Return the type of list
    listType () {
      const elementTypes = {
        ol: 'ol',
        ul: 'ul',
        icon: 'ul'
      }

      return elementTypes[this.type]
    },

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-list'
      const { type } = this

      return {
        [baseClass]: true,
        [`${baseClass}--${type}`]: true
      }
    }
  }
}
</script>
<style lang="sass" scoped>
@use '../../../assets/sass/colors' as colors
@use '../../../assets/sass/mixins' as mixins
@use '../../../assets/sass/variables' as vars

.m-list
  @include mixins.base-font
  @include mixins.font-size-little

  font-weight: 400
  color: colors.$blue

  li
    margin: 0

  li + li
    margin-top: vars.$spacer-2

  &--icon
    padding: 0
    list-style: none
    min-width: 16px

    li
      position: relative
      display: flex
      align-items: flex-start

      span
        display: inline-block
  &__icon
    margin-right: vars.$spacer-2
</style>
