<template>
  <div>
    <div v-if="!isFormValid && !hideAlert" class="row">
      <div class="col-12 col-md-8">
        <MAlert icon="exclamation-circle" hasContainer type="danger">
          <p class="mb-0">Er is een fout ontdekt. Controleer het formulier.</p>
        </MAlert>
      </div>
    </div>
    <div class="row d-flex">
      <div class="col-12 col-md-4 order-md-1 mb-4 mb-md-0" v-if="!hideEditBtn">
        <div v-if="editFormButton" class="btnContainer" :class="{ 'is-sticky': isBtnSticky }">
          <AButton :disabled="editFormButtonReadonly" isFullWidth size="sm" @click="onEditForm" v-if="!isEditable">
            <AIcon isBlock icon="pencil" viewBox="0 0 24 24" class="mr-2" />

            {{ $t("common.edit") }}
          </AButton>
          <div v-else>
            <AButton
              size="sm"
              isFullWidth
              @click="handleForm"
              :disabled="(!isFormChanged && isEditable) || !isFormValid || !allFormsValid"
            >
              {{ $t("common.save") }}
            </AButton>
            <AButton
              size="sm"
              class="mt-2"
              type="outline"
              color="blue"
              isFullWidth
              @click="handleResetForm"
            >
              {{ $t("common.cancel") }}
            </AButton>
          </div>
        </div>
      </div>
      <div
        class="col-12 order-md-0"
        :class="hideEditBtn ? 'col-md-12' : 'col-md-8'"
      >
        <div
          class="gs1-form gs1-border-color-ui-3 border rounded p-3"
          :class="{ 'is-disabled': !isEditable && !isFormEditable }"
        >
          <form @submit.prevent="handleForm">
            <vue-form-generator
              ref="vfg"
              :schema="schema"
              :model="model"
              :options="formOptions"
              @validated="onValidated"
              @model-updated="onFormChanged"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import nlValidationLabels from './nl.json'
import enValidationLabels from './en.json'
import customValidators from './validators/'

import AIcon from '@/components/Atoms/AIcon/'
import AButton from '@/components/Atoms/AButton'
import MAlert from '@/components/Molecules/MAlert'

Vue.use(VueFormGenerator, {
  validators: customValidators
})

export default {
  components: {
    AIcon,
    AButton,
    MAlert
  },

  props: {
    editFormButton: {
      type: Boolean,
      default: true
    },
    allFormsValid: {
      type: Boolean,
      default: true
    },
    editFormButtonReadonly: {
      type: Boolean,
      default: false
    },
    isBtnSticky: {
      type: Boolean,
      default: true
    },

    hideAlert: {
      type: Boolean,
      default: false
    },

    hideEditBtn: {
      type: Boolean,
      default: false
    },

    isFormEditable: {
      type: Boolean,
      default: false
    },

    modelData: {
      type: Object,
      default: () => {},
      required: true
    },

    schemaData: {
      type: Object,
      default: () => {},
      required: true
    },
    formOptions: {
      type: Object,
      default: () => {
        return {
          validateAfterLoad: true,
          validateAfterChanged: true,
          validateAsync: true
        }
      }
    }
  },

  data () {
    return {
      modelBackup: null,
      model: Object.assign({}, this.modelData),
      schema: Object.assign({}, this.schemaData),
      isEditable: false,
      isFormValid: false,
      isFormChanged: false
    }
  },

  mounted () {
    this.setLanguageLabels()
  },

  methods: {
    setLanguageLabels () {
      if (this.$i18n.locale === 'en') {
        Object.assign(
          VueFormGenerator.validators.resources,
          enValidationLabels
        )
      } else if (this.$i18n.locale === 'nl') {
        Object.assign(
          VueFormGenerator.validators.resources,
          nlValidationLabels
        )
      }
    },

    handleResetForm () {
      this.isEditable = false
      this.model = Object.assign({}, this.modelBackup)
      this.modelBackup = null
      this.$emit('cancel-edit-form', this.model)
    },

    handleForm () {
      this.isEditable = false
      this.isFormChanged = false
      this.$emit('submit-form', this.model)
    },

    onEditForm () {
      this.isEditable = true
      this.modelBackup = JSON.parse(JSON.stringify(this.model)) // Nasty, but removes the reference from model to backupModel!!
      this.$emit('edit-form', this.model)
    },

    onValidated (isValid, errors) {
      this.$emit('validated-form', isValid, errors, this.model)
      this.isFormValid = isValid
    },

    onFormChanged (newValue, schema) {
      this.isFormChanged = true
      this.$emit('changed-form', newValue, schema, this.model)
    },
    validate () {
      this.$refs.vfg.validate()
    }
  }
}
</script>

<style lang="sass">
@use '../../../assets/sass/colors' as colors
@use '../../../assets/sass/variables' as vars
@use '../../../assets/sass/typography' as typo

.gs1-form
  &.is-disabled
    .form-control
      background-color: transparent
      border: none
      padding: 0
      pointer-events: none
      select
        -webkit-appearance: none
      .hint
        display: none
      .form-group.required
        label span::after
          display: none
    label
      font-weight: typo.$font-weight-medium
      color: colors.$blue
      margin-bottom: 0
    fieldset
      padding-top: vars.$spacer-3
      padding-bottom: vars.$spacer-3
      border-bottom: solid 1px colors.$ui-3
      &:last-child
        border-bottom: none
    legend
      display: block
      padding-top: vars.$spacer-3
      padding-left: 15px
      padding-right: 15px
      color: colors.$blue
    .form-group
      .wrapper::after
        content: ''
        display: block
        position: absolute
        right: 8px
        top: 0
        bottom: 0
        width: 17px
        height: 17px
        padding: 2px
        margin: auto

    .form-group.required
      label span::after
        display: inline-block
        content: '*'
        color: colors.$orange
        margin-left: vars.$spacer-1
    .form-group.error
      .help-block,
      label,
      .form-control
        color: colors.$danger
      .form-control
        border-color: colors.$danger

      .wrapper
        position: relative
        &::after
          background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 8.5C17 13.175 13.175 17 8.5 17C3.825 17 0 13.175 0 8.5C0 3.825 3.825 0 8.5 0C13.175 0 17 3.825 17 8.5ZM8.5 4.25C7.96875 4.25 7.54375 4.675 7.54375 5.20625V5.3125L7.8625 9.03125C7.96875 9.35 8.18125 9.5625 8.5 9.5625C8.81875 9.5625 9.03125 9.35 9.03125 9.03125L9.45625 5.3125C9.45625 4.78125 9.1375 4.35625 8.5 4.25C8.5 4.25 8.60625 4.25 8.5 4.25ZM8.5 10.625C7.8625 10.625 7.4375 11.05 7.4375 11.6875C7.4375 12.325 7.8625 12.75 8.5 12.75C9.1375 12.75 9.5625 12.325 9.5625 11.6875C9.5625 11.05 9.1375 10.625 8.5 10.625Z' fill='%23BA1B23'/%3E%3C/svg%3E")
      .form-control
        padding-right: 30px

    .custom-select
      background: transparent

    .hint,
    .help-block
      font-style: italic
      margin-top: vars.$spacer-1
      font-size: typo.$font-size-tiny
      color: colors.$ui-5

  .btnContainer
    z-index: 1

    &.is-sticky
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      background-color: #fff
      padding: 15px
      border-top: solid 1px colors.$ui-3

      @media (min-width: #{map-get(vars.$grid-breakpoints, 'md')})
        position: sticky
        bottom: auto
        top: 20px
        left: auto
        padding: 0
        background-color: transparent
        border-top: none
  .postalCode .form-control
    text-transform: uppercase

  .errors.help-block
    color: colors.$danger
    font-size: typo.$font-size-little

  .form-group.required
    label span::after
      display: inline-block
      content: '*'
      color: colors.$orange
      margin-left: vars.$spacer-1

  .address-row
    position: relative

  @media (min-width: 500px)
  .field-registrationupload
    position: relative
    width: auto

  @media (min-width: 768px)
    .field-kvkbutton
      position: absolute
      top: -50px
      right: 0
      width: auto
</style>
