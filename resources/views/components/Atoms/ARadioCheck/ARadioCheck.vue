<template>
  <div :class="$_classes">
    <div
      class="a-radiocheck__item"
      v-for="(option, optionIndex) in options"
      :key="optionIndex"
    >
      <input
        class="a-radiocheck__input"
        v-model="values"
        :disabled="option.isDisabled"
        :id="`radiocheck-${_uid}-${optionIndex}`"
        :type="type"
        :value="option.value"
        @change="handleChange"
      /><label
        class="a-radiocheck__label"
        :for="`radiocheck-${_uid}-${optionIndex}`"
        >{{ option.label }}</label
      >
    </div>
  </div>
</template>
<style lang="sass" src="./ARadioCheck.sass" scoped></style>
<script src="./ARadioCheck.js"></script>
