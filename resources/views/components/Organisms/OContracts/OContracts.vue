<template>
  <div class="o-contracts">
    <ARow v-if="!contracts.isLoading &amp;&amp; contracts.all.length">
      <ACol
        class="o-contracts__col"
        v-for="(contract, contractIndex) in contracts.all"
        :key="`contract-col-${contractIndex}`"
        :md="3"
      >
        <AHeading size="h4" :hasMargin="true">{{ contract.name }}</AHeading
        ><template v-if="hasAddress(contract)"
          >{{ contract.address }}<br />{{ contract.postalcode }}
          {{ contract.location }}</template
        >
        <div class="o-contracts__links" v-if="hasLinks(contract)">
          <div v-for="(link, linkIndex) in links" :key="linkIndex">
            <div class="o-contracts__link" v-if="contract[link.field]">
              <div class="o-contracts__label">{{ link.label }}:</div>
              <a
                class="o-contracts__href"
                :href="`${link.hrefPrefix}${contract[link.field]}`"
                target="_blank"
                >{{ contract[link.field] }}</a
              >
            </div>
          </div>
        </div>
        <div class="o-contracts__controls">
          <AHeading size="h5" :hasMargin="true">{{
            contract.controlLabel
          }}</AHeading>
          <div
            v-for="(control, controlIndex) in contract.controls"
            :key="`control-row-${controlIndex}`"
          >
            {{ control }}
          </div>
        </div>
      </ACol>
    </ARow>
    <MFormDescription
      v-else-if="!contracts.isLoading"
      v-bind="description"
    ></MFormDescription>
    <div class="o-contracts__loader" v-else>
      <ASpinner size="lg"></ASpinner>
    </div>
  </div>
</template>
<style lang="sass" src="./OContracts.sass" scoped></style>
<script src="./OContracts.js"></script>
