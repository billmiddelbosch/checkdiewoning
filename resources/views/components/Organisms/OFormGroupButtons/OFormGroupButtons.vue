<template>
  <div class="o-formgroupbuttons">
    <MFormGroup :hasTopMargin="true" :isInline="true">
      <AButton
        v-for="(button, buttonIndex) in buttons.all"
        :key="`button-${buttonIndex}`"
        :type="button.type"
        :isSubmit="button.isSubmit"
        @click.native.prevent="click(button.id)"
        >{{ button.label }}</AButton
      >
    </MFormGroup>
  </div>
</template>
<script src="./OFormGroupButtons.js"></script>
