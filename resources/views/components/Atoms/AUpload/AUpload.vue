<template>
  <div>
    <Alert :type="errorType" :title="error" v-if="error && showAlert">
      <template v-slot:default>
        {{ errorMessage }}
      </template>
    </Alert>
    <AButton
      isFullWidth
      @click="openFilePicker()"
      :isLoading="submitIsLoading"
      style="--icon-size: 1em"
      type="outline"
    >
      <Icon :name="'paperclip'" class="icon-style" />
      {{ computedButtonText }}
    </AButton>

    <input
      type="file"
      ref="fileInput"
      :accept="allowedExtensions"
      @change="handleFileUpload"
      style="display: none"
      v-bind="multiAttrs"
    />

    <div v-for="(file, index) in files" :key="index" class="file-name">
      <div class="d-flex">
        <div class="w-100 mr-2">
          {{ file.name }}
        </div>
        <div @click="removeFile(index)">
          <AIcon icon="cross" viewBox="0 0 24 24" size="md" />
        </div>
      </div>
      <div v-if="errors[index]" style="color: red">
        <span>{{ errors[index].errorMessage }}</span>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.file-name {
  margin-top: 1em;
  font-size: 0.9em;
  font-style: italic;
}

.icon-style svg {
  transform: scale(2);
}
</style>

<script>
import AIcon from '@/components/Atoms/AIcon'
import AButton from '@/components/Atoms/AButton'
import Icon from '@/common/components/Icon/Icon.vue'
import Alert from '@/common/components/Alert/Alert.vue'

const errorObj = {
  error: null,
  errorType: null,
  errorMessage: null
}

export default {
  name: 'AUpload',
  components: {
    AIcon,
    AButton,
    Icon,
    Alert
  },
  data () {
    return {
      submitIsLoading: false,

      files: [],
      errors: [],

      error: null,
      errorType: null,
      fileName: null,
      errorMessage: '',
      fileData: null,
      reader: null
    }
  },
  props: {
    allowedExtensions: {
      type: Array,
      required: false,
      default: () => ['application/pdf']
    },
    buttonText: {
      type: String,
      default: ''
    },
    maxSizeInKB: {
      type: Number,
      default: 5000
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    showAlert: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    computedButtonText () {
      return this.buttonText || this.$t('codes.upload.uploadButtonText')
    },
    multiAttrs () {
      return this.multiple
        ? {
          multiple: 'multiple'
        }
        : null
    }
  },
  methods: {
    openFilePicker () {
      this.$refs.fileInput.click()
    },
    handleFileUpload (event) {
      const newFiles = event.target.files
      this.files.push(...newFiles)
      this.validateFiles()

      this.multiple ? this.emitMultiple() : this.emitSingle()
    },
    validateFiles () {
      this.files.forEach((file, index) => {
        // Reset validations
        if (this.errors[index]) {
          this.errors[index].error = null
          this.errors[index].errorType = null
          this.errors[index].errorMessage = null
        }

        // File extention
        if (!this.allowedExtensions.includes(file.type)) {
          const newError = { ...errorObj }
          newError.error = this.$t('components.aUpload.invalidFile')
          newError.errorType = 'danger'
          newError.errorMessage = this.$t('components.aUpload.invalidFile')

          this.errors[index] = newError
        }

        // File size
        if (file.size >= this.maxSizeInKB * 1000) {
          const newErrorSize = { ...errorObj }
          newErrorSize.error = this.$t('components.aUpload.invalidFileSize')
          newErrorSize.errorType = 'danger'
          newErrorSize.errorMessage = this.$t(
            'components.aUpload.invalidFileSize'
          )

          this.errors[index] = newErrorSize
        }
      })

      // Emit validation results
      this.$emit('validated', this.errors)
    },
    emitSingle () {
      this.files = event.target.files

      const file = event.target.files[0]

      if (
        this.allowedExtensions.includes(file.type) &&
        file.size <= this.maxSizeInKB * 1000
      ) {
        this.reader = new FileReader()

        this.reader.onloadend = () => {
          this.fileData = this.reader.result
          this.fileName = file.name
          this.$emit('file-uploaded', this.fileData)
          this.error = null
          this.errorType = null
        }

        this.reader.onerror = () => {
          // ToDo: this should not be referenced a specific functionality, but within own component translations
          this.error = this.$t('account.international.invalidFile')
          this.errorType = 'danger'
          this.errorMessage = this.$t('account.international.filereaderError')
        }

        this.reader.readAsDataURL(file)
      } else {
        this.error = this.$t('account.international.invalidFile')
        this.errorType = 'danger'
        this.errorMessage = this.$t('account.international.uploadError')
      }
    },
    emitMultiple () {
      this.$emit('changed', { files: this.files })
    },
    removeFile (indexValue) {
      this.files = this.files.filter((item, index) => index !== indexValue)
      this.errors = this.errors.filter((item, index) => index !== indexValue)
      this.validateFiles()
    },
    removeFileOld () {
      this.$refs.fileInput.value = null
      this.fileName = null
      this.fileData = null
      this.reader = null
      this.$emit('file-removed')
    }
  },
  created () {}
}
</script>
