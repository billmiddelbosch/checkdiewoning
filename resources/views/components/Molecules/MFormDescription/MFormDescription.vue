<template>
  <div :class="$_classes">
    <ARow>
      <ACol :md="6">
        <AHeading :hasMargin="true" size="h3" v-if="title">{{
          title
        }}</AHeading>
        <p class="m-formdescription__body">{{ body }}</p>
      </ACol>
    </ARow>
  </div>
</template>
<style lang="sass" src="./MFormDescription.sass" scoped></style>
<script src="./MFormDescription.js"></script>
