<template>
  <div class="row mb-3" v-if="schema.buttonVisible">
    <div class="col-12 mb-2">
      <div class="gs1-color-ui-8 mb-1">
        <label>
          {{ $t("companyDetails.registration") }}
        </label>
      </div>
      <p class="font-size-tiny">{{ $t("companyDetails.registrationText") }}</p>
      <Upload
        @input="onDocumentUploadChange"
        @file-removed="removedFiled"
        :accept="acceptedFileExtension"
        :config="{
          name: 'document',
          label: 'Upload'
        }"
        v-model="document"
      >
      </Upload>

      <b-form-invalid-feedback :state="!hasDocumentFileSizeError">
        {{ $t("account.international.uploadMaxSizeError") }}
      </b-form-invalid-feedback>
      <MAlert
        v-if="hasDocumentError"
        icon="info-circle-o"
        hideLine
        type="danger"
        hasContainer
      >
        <p class="mb-0">
          {{ $t("account.international.uploadError") }}
        </p>
      </MAlert>
    </div>
  </div>
</template>

<script>
import Upload from '@/common/components/Wizard/Fields/Upload'
import { abstractField } from 'vue-form-generator'
export default {
  components: {
    Upload
  },
  mixins: [abstractField],
  data () {
    return {
      acceptedFileExtension: '.pdf',
      hasDocument: false,
      hasDocumentError: false,
      hasDocumentFileSizeError: null,
      document: null,
      base64: null
    }
  },

  methods: {
    removedFiled () {
      this.hasDocument = false
      this.document = null
      this.hasDocumentFileSizeError = null
      this.hasDocumentError = false
      this.base64 = null
      this.value = null
    },
    onDocumentUploadChange (file) {
      if (!file) {
        return
      }
      this.value = { name: 'sdfsdfsdfsdf' }
      var re = /(?:\.([^.]+))?$/
      var ext = re.exec(file.name)[1]

      if (ext.toLocaleLowerCase() !== 'pdf') {
        this.document = null
        this.hasDocumentError = true
        this.hasDocument = false
        this.document = null
        this.hasDocumentFileSizeError = null
        this.base64 = null
        this.value = null
        return
      }

      if (file.size > 4500000) {
        this.hasDocumentFileSizeError = true
        return
      }

      this.hasDocumentFileSizeError = null
      this.hasDocumentError = false
      this.document = file
      this.hasDocument = true
      this.createBase64Image(file).then(
        data => {
          var filename = file.name
          this.value = { data: data, fileName: filename }
        }
      )
    },
    createBase64Image (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
  },
  mounted () {

  },

  watch: {
  }
}
</script>
