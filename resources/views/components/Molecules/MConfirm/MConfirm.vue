<template>
  <div>
    <slot
      name="activator"
      :on="{ onKeydown: openDialog, click: this.openDialog }"
    ></slot>

    <div
      v-if="dialogVisible"
    >
      <div
        class="modal hidden"
        tabindex="-1"
        role="dialog"
        ref="modal"
        v-if="dialogVisible"
      >
        <div class="modal__backdrop" @click="closeDialog()" />
        <div
          class="modal-dialog"
          role="document"
        >
          <div
            class="modal-content p-4"
          >
            <div class="modal-header" v-if="this.$slots.title">
              <slot name="title"></slot>
              <button
                type="button"
                @click="this.closeDialog"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="my-4">
                <slot name="message">
                  <span class="font-weight-medium gs1-color-blue">
                    Wil je je informatie opslaan als concept?
                  </span>
                  <div>Je kunt dan later verder met activeren.</div>
                </slot>
              </div>
            </div>
            <div class="justify-content-center m-2">
              <div>
                <slot
                  name="actions"
                  :on="{ onKeydown: closeDialog, click: this.closeDialog }"
                  class=""
                >
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MConfirm',

  components: {},

  props: {},
  data () {
    return {
      dialogVisible: false,
      attrs: null
    }
  },
  watch: {},
  computed: {},
  mounted () {},
  methods: {
    openDialog (evnt) {
      this.dialogVisible = true
    },
    closeDialog (evnt) {
      this.dialogVisible = false
    }
  },
  created () {}
}
</script>
<style scoped>
.modal-dialog {
  z-index: 10;
}
</style>
