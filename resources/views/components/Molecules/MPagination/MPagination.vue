<template>
  <AButtonGroup>
    <AButton
      :isDisabled="!$_hasPrevious"
      color="ui-1"
      size="xs"
      @click.native.prevent="$_first"
    >
      <AIcon icon="chevron-bar-left" size="sm"></AIcon>
    </AButton>
    <AButton
      :isDisabled="!$_hasPrevious"
      color="ui-1"
      size="xs"
      @click.native.prevent="$_previous"
    >
      <AIcon icon="chevron-left" size="sm"></AIcon>
    </AButton>
    <AButton
      v-for="(number, index) in $_visiblePages"
      :key="index"
      :isActive="page === number"
      color="ui-1"
      size="xs"
      @click.native.prevent="$_select(number)"
      >{{ number }}</AButton
    >
    <AButton
      :isDisabled="!$_hasNext"
      color="ui-1"
      size="xs"
      @click.native.prevent="$_next"
    >
      <AIcon icon="chevron-right" size="sm"></AIcon>
    </AButton>
    <AButton
      :isDisabled="!$_hasNext"
      color="ui-1"
      size="xs"
      @click.native.prevent="$_last"
    >
      <AIcon icon="chevron-bar-right" size="sm"></AIcon>
    </AButton>
  </AButtonGroup>
</template>
<script src="./MPagination.js"></script>
