<template>
  <span :class="$_classes" @click="$_click"
    ><slot></slot><AIcon :icon="$_icon"></AIcon
  ></span>
</template>
<style lang="sass" src="./MSorting.sass" scoped></style>
<script src="./MSorting.js"></script>
