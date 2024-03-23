<template>
  <th :class="$_classes">
    <div class="d-flex">
      <div class="w-100 textValue"><slot /></div>
      <div v-if="showOrderBy" @click="toggleAscending()">
        <AIcon icon="arrow-down" v-if="ascendingValue"></AIcon
        ><AIcon icon="arrow-up" v-if="!ascendingValue"></AIcon>
      </div>
    </div>
  </th>
</template>
<script>
import AIcon from '@/components/Atoms/AIcon'

export default {
  components: {
    AIcon
  },
  props: {
    column: {
      required: false,
      type: String,
      default: null
    },
    showOrderBy: {
      required: false,
      type: Boolean,
      default: false
    },
    orderBy: {
      required: false,
      type: Object,
      default: null
    },
    ascending: {
      required: false,
      type: Boolean,
      default: true
    },
    color: {
      required: false,
      type: String,
      default: 'blue'
    },
    backgroundColor: {
      required: false,
      type: String,
      default: 'ui-1'
    }
  },
  data () {
    return {
      ascendingValue: false,
      orderByIsActive: false,
      orderByValue: null
    }
  },
  watch: {
    orderBy: {
      deep: true,
      immediate: true,
      handler () {
        if (this.orderBy == null || this.column == null) {
          return
        }

        // Set active or not
        this.orderByIsActive = this.orderBy.column === this.column
        // Reset state
        this.ascendingValue = this.ascending
      }
    },
    ascending: {
      immediate: true,
      handler () {
        this.ascendingValue = this.ascending
      }
    }
  },
  computed: {
    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-th'
      const { color, backgroundColor, orderByIsActive } = this

      return {
        [baseClass]: true,
        [`${baseClass}--color-${color}`]: true,
        [`${baseClass}--bg-${backgroundColor}`]: true,
        [`${baseClass}--isActive-${orderByIsActive}`]: true
      }
    }
  },
  methods: {
    toggleAscending () {
      this.ascendingValue = !this.ascendingValue

      this.orderByValue = {
        column: this.column,
        asc: this.ascendingValue
      }

      this.$emit('orderByChanged', this.orderByValue)
    }
  }
}
</script>
<style scoped lang="scss">
.a-th {
  .textValue {
    font-weight: 600;
  }

  &--bg-ui-1 {
    background-color: var(--gs1-color-ui-1);
  }
  &--color-blue {
    color: var(--gs1-color-blue);
  }
  &--isActive-true {
    background-color: var(--gs1-color-ui-2) !important;
  }
}
</style>
