<template>

  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/../../resources/assets/isalu_logo.png" alt="iSalu-Logo" width="150" height="150" />
    </router-link>
  </div>

</template>

<style scoped>
  img {
    background: rgb(243,244,246);
    padding: 12px;
  }
</style>