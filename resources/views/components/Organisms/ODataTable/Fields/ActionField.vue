<template>
  <td>
    <a
      class="o-datatable-field__action"
      href=""
      @click.prevent="field.callback(data)"
      ><span>{{ data[field.id] }}</span
      ><AIcon icon="arrow-right-short" size="sm"></AIcon
    ></a>
  </td>
</template>
<style lang="sass" src="./ActionField.sass" scoped></style>
<script src="./ActionField.js"></script>
