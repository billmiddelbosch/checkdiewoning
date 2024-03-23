<template>
  <div :class="$_classes" @click="click">
    <div class="m-chip__label">
      <slot></slot>
    </div>
    <div class="m-chip__close" v-if="isInteractive">
      <AIcon icon="times"></AIcon>
    </div>
  </div>
</template>
<style lang="sass" src="./MChip.sass" scoped></style>
<script src="./MChip.js"></script>
