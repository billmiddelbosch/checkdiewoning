<template>
  <a
    :class="$_classes"
    href=""
    @click.prevent="click">
      <slot></slot>
      <p class="font-weight-bold mb-1">
        <slot name="firstLine"></slot>
      </p>
      <slot name="secondLine"></slot>

  </a>
</template>
<style lang="sass" src="./MDropdownItem.sass" scoped></style>
<script src="./MDropdownItem.js"></script>
