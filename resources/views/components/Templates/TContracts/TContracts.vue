<template>
  <div class="t-contracts-template">
    <MHeader :title="title"></MHeader>
    <OOnboarding :onboardingKey="onboardingKey"></OOnboarding>
    <OAlerts :alerts="alerts" @close="close"></OAlerts>
    <OContracts :contracts="contracts" :description="description"></OContracts>
    <OFormGroupButtons
      v-if="hasRight"
      :buttons="buttons"
      @click="click"
    ></OFormGroupButtons>
  </div>
</template>
<script src="./TContracts.js"></script>
