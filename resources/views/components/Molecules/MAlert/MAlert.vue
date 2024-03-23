<template>
  <div :class="$_classes" v-if="isVisible" :data-rt="dataRtValue">
    <div :class="$_innerClasses">
      <div class="m-alert__icon" v-if="icon">
        <AIcon :icon="icon" size="md"></AIcon>
      </div>
      <div class="m-alert__content">
        <div class="m-alert__title" v-if="$slots.title">
          <slot name="title"></slot>
        </div>
        <div class="m-alert__body">
          <slot></slot>
        </div>
      </div>
      <div class="m-alert__close" v-if="isClosable">
        <a class="m-alert__close-link" href="" @click.prevent="close">
          <AIcon icon="times" size="lg"></AIcon>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="sass" src="./MAlert.sass" scoped></style>
<script src="./MAlert.js"></script>
