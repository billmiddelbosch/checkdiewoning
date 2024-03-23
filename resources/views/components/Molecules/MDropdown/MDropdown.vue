<template>
  <div class="m-dropdown">
    <span class="mb-2" v-if="topLabel">{{ topLabel }}</span>
    <a
      :class="$_classes"
      @click.prevent="toggleDropdown"
      @mouseover="handleMouseOver"
    >
      <slot name="head"></slot>
      <div class="m-dropdown__label" v-if="!hasSlotHead">
        <span >{{ label }}</span>
        <AIcon icon="chevron-down" v-if="!hideChevron"></AIcon>
      </div>
    </a>
    <div class="m-dropdown__menu-wrapper" v-show="isVisibleMenu">
      <div class="m-dropdown__menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="sass" src="./MDropdown.sass" scoped></style>
<script src="./MDropdown.js"></script>
