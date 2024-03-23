<template>
  <div :class="$_classes" v-if="message &amp;&amp; isVisible">
    <div class="m-global-notification__content">
      <div class="m-global-notification__body">
        <p v-html="message"></p>
      </div>
      <div class="m-global-notification__close" v-if="isClosable">
        <a
          class="m-global-notification__close-link"
          href=""
          @click.prevent="close"
        >
          <AIcon icon="times" size="lg"></AIcon>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="sass" src="./MGlobalNotification.sass" scoped></style>
<script src="./MGlobalNotification.js"></script>
