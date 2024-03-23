<template>
  <AButton :disabled="schema.isEditable" @click="schema.clickAction" v-if="schema.buttonVisible">{{ schema.buttonText }}</AButton>

</template>

<script>
import { abstractField } from 'vue-form-generator'
import AButton from '@/components/Atoms/AButton'

export default {
  components: {
    AButton
  },
  mixins: [abstractField]
}
</script>
