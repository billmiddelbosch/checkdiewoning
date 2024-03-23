<template>
  <div :class="$_textareafieldClasses">
    <label :class="$_labelClasses">
      <span class="a-textareafield__label" v-if="label">{{ label }}</span>
      <div class="a-textareafield__field">
        <AIcon
          class="a-textareafield__iconLeft"
          v-if="iconLeft"
          :icon="iconLeft"
        ></AIcon>
        <textarea
          ref="textarea"
          :placeholder="placeholder"
          :class="$_inputClasses"
          :type="type"
          :disabled="disabled"
          :maxlength="maxlength"
          :value="value"
          :style="style"
          @focus="isActive = true"
          @blur="isActive = false"
          @keyup="handleKeyUp"
        ></textarea>
        <!-- <b-form-textarea
          id="textarea-auto-height"
          :placeholder="placeholder"
          :disabled="disabled"
          rows="3"
          max-rows="8"
          @focus="isActive = true"
          @blur="isActive = false"
          @keyup="handleKeyUp"
        ></b-form-textarea> -->

        <!-- <input
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
        /> -->
        <AIcon
          class="a-textareafield__iconState"
          v-if="state"
          :icon="$_iconName"
        ></AIcon>
        <AIcon
          class="a-textareafield__iconRight"
          v-if="iconRight"
          :icon="iconRight"
        ></AIcon>
      </div>
    </label>
    <div class="a-textareafield__msg" v-if="msg">{{ msg }}</div>
  </div>
</template>
<script>
import AIcon from '../../Atoms/AIcon'
import iconList from '../../Atoms/AIcon/icons.json'

export default {
  name: 'textareafield',

  components: {
    AIcon
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical',
      validator: (value) => {
        return ['horizontal', 'vertical'].includes(value)
      }
    },

    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: null,
      required: false
    },

    placeholder: {
      type: String,
      default: null,
      required: false
    },

    type: {
      type: [String, Number],
      default: 'text',
      validator: (value) => {
        return ['text', 'email', 'password', 'number', 'tel'].includes(value)
      }
    },

    msg: {
      type: String,
      default: null
    },

    state: {
      type: String,
      default: null,
      validator: (value) => {
        return [null, 'error', 'correct'].includes(value)
      }
    },

    iconLeft: {
      type: String,
      default: null,
      validator: (name) => Object.keys(iconList).includes(name)
    },

    iconRight: {
      type: String,
      default: null,
      validator: (name) => Object.keys(iconList).includes(name)
    },

    value: {
      type: String,
      default: null
    },

    maxlength: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      isActive: false,
      style: ''
    }
  },

  watch: {
    isActive (newVal, oldVal) {
      if (newVal === true) {
        this.$emit('focus', this.$refs.textarea.value)
      } else if (newVal === false) {
        this.$emit('blur', this.$refs.textarea.value)
      }
    },
    value () {
      // ToDo: Move to own Height function!
      var scrollHeight = this.$refs.textarea.scrollHeight
      this.style = 'height: ' + scrollHeight + 'px'
      // this.$refs.textarea.style.height = scrollHeight
    }
  },

  methods: {
    handleKeyUp ($event) {
      this.$emit('update:value', $event.target.value)
      this.$emit('change', this.value)
    }
  },

  computed: {
    $_textareafieldClasses () {
      const baseClass = 'a-textareafield'
      const inputStates = {
        error: 'error',
        correct: 'correct'
      }

      return {
        [baseClass]: true,
        [`${baseClass}--${this.orientation}`]: true,
        [`${baseClass}--${this.isActive}`]: this.isActive,
        [`${baseClass}--${inputStates[this.state]}`]: this.state,
        [`${baseClass}--disabled`]: this.disabled
      }
    },

    $_inputClasses () {
      const baseClass = 'a-textareafield__field'

      return {
        [baseClass]: true
      }
    },

    $_labelClasses () {
      const baseClass = 'a-textareafield__container'

      return {
        [baseClass]: true
      }
    },

    $_iconName () {
      const icons = {
        error: 'exclamation-circle',
        correct: 'check-circle-fill'
      }

      return this.state ? icons[this.state] : null
    }
  }
}
</script>
<style lang="sass" src="./ATextareaField.sass" scoped></style>
