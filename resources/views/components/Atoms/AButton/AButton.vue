<template>
  <button
    :class="$_classes"
    :disabled="isDisabled"
    :type="$_buttonType"
    :title="tooltip"
    :buttonBadge="buttonBadge"
    @click.prevent="click"
    :data-rt="dataRtValue"
  >
    <slot v-if="!isLoading"></slot
    ><span
      class="spinner-border spinner-border-sm mr-1"
      v-if="isLoading"
      role="status"
      aria-hidden="true"
    ></span>
    <span v-if="buttonBadge > 0" class="badge">
      {{ buttonBadge }}
    </span>
  </button>
</template>
<style lang="sass" src="./AButton.sass" scoped></style>
<script src="./AButton.js"></script>
