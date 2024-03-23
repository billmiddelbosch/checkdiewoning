<template>
  <div
    class="custom-control custom-switch"
    :class="$_classes"
    @click.prevent="click"
  >
      <input
        class="custom-control-input"
        :disabled="isDisabled"
        type="checkbox"
        :checked=value
        role="switch"
        id="ASwitch">
      <label
        class="custom-control-label"
        for="ASwitch">
          {{  switchLabel }}
      </label>
  </div>
</template>
<style lang="sass" src="./ASwitch.sass" scoped></style>
<script src="./ASwitch.js"></script>
