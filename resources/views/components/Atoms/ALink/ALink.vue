<template>
  <a :class="$_classes" :title="title" :href="href" @click.prevent="click">
    <slot></slot>
  </a>
</template>
<style lang="sass" src="./ALink.sass" scoped></style>
<script src="./ALink.js"></script>
