<template>
  <div :class="$_inputFieldClasses">
    <label :class="$_labelClasses">
      <span class="a-inputfield__label" v-if="label">{{ label }}</span>
      <div class="a-inputfield__field">
        <AIcon
          class="a-inputfield__iconLeft"
          v-if="iconLeft"
          :icon="iconLeft"
        ></AIcon
        ><input
          ref="input"
          :placeholder="placeholder"
          :class="$_inputClasses"
          :type="type"
          :disabled="disabled"
          :maxlength="maxlength"
          :value="value"
          @focus="isActive = true"
          @blur="isActive = false"
          @keyup="handleKeyUp"
          @keypress="handleKeyPress"
          :data-rt="dataRtValue"
        /><AIcon
          class="a-inputfield__iconState"
          v-if="state"
          :icon="$_iconName"
        ></AIcon
        ><AIcon
          class="a-inputfield__iconRight"
          v-if="iconRight"
          :icon="iconRight"
        ></AIcon></div
    ></label>
    <div class="a-inputfield__msg" v-if="msg">{{ msg }}</div>
  </div>
</template>
<style lang="sass" src="./AInputField.sass" scoped></style>
<script src="./AInputField.js"></script>
