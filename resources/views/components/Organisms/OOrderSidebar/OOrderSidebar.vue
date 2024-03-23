<template>
  <MContentGroup isBordered isFullwidth hasShadow>
    <template #body-content>
      <div>
        <slot name="top" />
        <div v-if="displayOrderOverview">
          <OrderOverview :overviewCollapsed="overviewCollapsed" />
          <hr class="mt-4" />
        </div>
        <slot name="bottom" />
      </div>
    </template>
  </MContentGroup>
</template>
<script>
import { mapGetters } from 'vuex'

import MContentGroup from '@/components/Molecules/MContentGroup'
import OrderOverview from '@/modules/account/components/OrderOverview.vue'

export default {
  components: {
    MContentGroup,
    OrderOverview
  },
  props: {
    overviewCollapsed: {
      default: null,
      type: Boolean,
      require: false
    },
    showOrderOverview: {
      default: false,
      type: Boolean,
      require: true
    },
    firstCartItemFamilyName: {
      default: null,
      type: String,
      require: false
    }
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters('cart', ['getCartItemCount']),
    uspList () {
      if (this.firstCartItemFamilyName != null) {
        const uspListArray = []
        if (this.uniqueSellingPoint1) {
          uspListArray.push(this.uniqueSellingPoint1)
        }
        if (this.uniqueSellingPoint2) {
          uspListArray.push(this.uniqueSellingPoint2)
        }
        if (this.uniqueSellingPoint3) {
          uspListArray.push(this.uniqueSellingPoint3)
        }
        return uspListArray
      }
      return []
    },
    uniqueSellingPoint1 () {
      var key = `shoppingcart.usp.${this.firstCartItemFamilyName.toLowerCase()}.uniqueSellingPoint1`
      var translation = this.$t(key)
      return translation === key ? null : translation
    },
    uniqueSellingPoint2 () {
      var key = `shoppingcart.usp.${this.firstCartItemFamilyName.toLowerCase()}.uniqueSellingPoint2`
      var translation = this.$t(key)
      return translation === key ? null : translation
    },
    uniqueSellingPoint3 () {
      var key = `shoppingcart.usp.${this.firstCartItemFamilyName.toLowerCase()}.uniqueSellingPoint3`
      var translation = this.$t(key)
      return translation === key ? null : translation
    },
    displayOrderOverview () {
      return this.getCartItemCount > 0 || this.showOrderOverview
    },
    displayUspList () {
      return this.$route.name !== 'account.verify' && this.uspList.length > 0
    }
  }
}
</script>
<style scoped>
.border-3 {
  border-width: 3px !important;
}
</style>
