<template>
  <div :class="$_classes" :style="$_styles">
    <div class="m-contentgroup__header" v-if="hasHeader">
      <div class="m-contentgroup__column m-contentgroup__column--align-left">
        <AHeading size="h6" class="ui-8 mb-2 font-weight-bold" v-if="hasTItle">
          <slot name="title"></slot>
        </AHeading>
        <slot name="header-left"></slot>
      </div>
      <div class="m-contentgroup__column m-contentgroup__column--align-right">
        <slot name="header-right"></slot>
        <a href="" v-if="isCollapsible" @click.prevent="$_toggleCollapse">
          <AIcon :icon="$_toggleIcon"></AIcon>
        </a>
      </div>
    </div>
    <div
      class="m-contentgroup__body"
      v-show="!isCollapsed"
      :class="{ 'has-no-header': !hasHeader }"
    >
      <div
        v-for="(slot, index) in bodySlots"
        :key="`slot-${index}`"
        :class="`m-contentgroup__row m-contentgroup__row--${slot}`"
      >
        <slot :name="slot"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="sass" src="./MContentGroup.sass" scoped></style>
<script src="./MContentGroup.js"></script>
