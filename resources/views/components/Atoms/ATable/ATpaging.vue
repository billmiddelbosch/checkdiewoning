<template>
  <div class="d-flex pagination-wrapper justify-content-end">
    <span class="font-size-little pagination-total-rows"
      >{{ totalCount }}
      <span v-if="totalCount === 1">{{ totalCountLabelSingle }}</span>
      <span v-if="totalCount !== 1">{{ totalCountLabelPlural }}</span>
    </span>
    <MPagination
      :total="totalPages"
      :page="currentPageValue"
      @change="onChangePaging"
    >
    </MPagination>
  </div>
</template>
<script>
import MPagination from '@/components/Molecules/MPagination'

export default {
  components: { MPagination },
  props: {
    totalCount: {
      default: 0,
      type: Number
    },
    totalCountLabelSingle: {
      default: '',
      type: String
    },
    totalCountLabelPlural: {
      default: '',
      type: String
    },

    currentPage: {
      default: 1,
      type: Number
    },
    pageSize: {
      default: 1,
      type: Number
    }
  },
  data () {
    return {
      currentPageValue: 1,
      pageSizeValue: 5,
      totalPages: null
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.currentPageValue = this.currentPage
      }
    },
    pageSize: {
      immediate: true,
      handler () {
        this.pageSizeValue = this.pageSize
      }
    },
    totalCount: {
      immediate: true,
      handler () {
        this.totalPages = Math.ceil(this.totalCount / this.pageSize)
      }
    }
  },
  computed: {},
  methods: {
    onChangePaging (value) {
      this.$emit('change', value)
    }
  }
}
</script>
<style scoped>
.pagination-wrapper {
  background-color: var(--gs1-color-ui-1);
  border-top: 1px solid var(--gs1-color-ui-3);
  border-bottom: 1px solid var(--gs1-color-ui-3);
}

.pagination-total-rows {
  padding-right: 18px;
  padding-top: 5px;
}
</style>
