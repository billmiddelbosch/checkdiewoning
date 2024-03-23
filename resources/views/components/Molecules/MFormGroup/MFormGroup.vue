<template>
  <div :class="$_classes">
    <ARow>
      <ACol :md="6">
        <div class="m-formgroup__items">
          <slot></slot>
        </div>
      </ACol>
    </ARow>
  </div>
</template>
<style lang="sass" src="./MFormGroup.sass"></style>
<script src="./MFormGroup.js"></script>
