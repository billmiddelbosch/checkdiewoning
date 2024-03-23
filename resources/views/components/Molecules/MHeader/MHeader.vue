<template>
  <div :class="$_classes">
    <ARow>
      <ACol>
        <AHeading :size="size">{{ title }}</AHeading>
      </ACol>
      <ACol>
        <slot></slot>
      </ACol>
    </ARow>
  </div>
</template>
<style lang="sass" src="./MHeader.sass" scoped></style>
<script src="./MHeader.js"></script>
