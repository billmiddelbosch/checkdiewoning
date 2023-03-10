<script setup>


defineProps({
  large: {
    type: Boolean,
      required: false,
      default: false
  	}
})

const modelOpen = ref(0)

function closeModal() {
  modelOpen.value = false
}


</script>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          :class="{'modal-container--large' : large}"
          class="modal-container"
        >
          <a
            href="#"
            class="close"
            @click.stop.prevent="closeModal"
          />
          <div class="modal__header">
            <slot name="header" />
          </div>
          <div class="modal__text">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
