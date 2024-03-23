<template>
  <table :class="$_classes">
    <thead>
      <slot name="head"></slot>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
</template>
<style lang="sass" src="./ATable.sass" scoped></style>
<script src="./ATable.js"></script>
