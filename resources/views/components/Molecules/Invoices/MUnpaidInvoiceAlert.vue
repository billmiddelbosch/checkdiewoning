<template>
  <MAlert v-if="showAlert" class="mt-3" type="danger">
    <div>
      <AHeading size="h6" class="gs1-color-danger">
        {{ $t('contracts.alert.invoicesAlertTitle') }}
      </AHeading>

      <p>
        {{ $t("contracts.contractCancellation.cancelContractOpenInvoices") }}
      </p>

      <AButton
        color="blue"
        :to="{ name: 'company.invoices' }"
        >
        {{$t('contracts.alert.invoicesButtonLabel')}}
      </AButton>
    </div>
  </MAlert>

</template>

<script>
import MAlert from '@/components/Molecules/MAlert'
import AHeading from '@/components/Atoms/AHeading'
import AButton from '@/components/Atoms/AButton'
import InvoiceService from '@/services/InvoicesService'

import { mapGetters } from 'vuex'

export default {

  components: {
    MAlert,
    AHeading,
    AButton
  },

  data () {
    return {
      showAlert: false
    }
  },
  computed: {
    ...mapGetters('account', ['accountNumber'])
  },
  mounted () {
    this.handleHasUnpaidInvoices()
  },
  methods: {
    handleHasUnpaidInvoices () {
      InvoiceService.getUnpaidInvoices(
        this.accountNumber
      ).then(({ data }) => {
        var result = !data.outcome.isError && data.payload.value !== null && data.payload.value.length !== 0
        this.showAlert = result
        this.$emit('hasUnpaidInvoices', result)
      })
    }
  }
}
</script>
