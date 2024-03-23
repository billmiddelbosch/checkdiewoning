<template>
  <td>
    <a
      class="o-datatable-field__callback"
      href=""
      @click.prevent="field.callback(data)"
      >{{ data[field.id] }}</a
    >
  </td>
</template>
<style lang="sass" src="./CallbackField.sass" scoped></style>
<script src="./CallbackField.js"></script>
