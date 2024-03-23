<template>
  <div class="o-alerts">
    <div class="o-alerts__wrapper" v-if="alerts.all.length">
      <ARow>
        <ACol :md="8">
          <MAlert
            v-for="(alert, alertIndex) in alerts.all"
            :key="`alert-${alertIndex}`"
            :icon="alert.icon"
            :type="alert.type"
            :isClosable="alert.isClosable"
            @close="close(alert.id)"
            ><template #title>{{ alert.title }}</template>
            <div v-html="alert.body"></div>
          </MAlert>
        </ACol>
      </ARow>
    </div>
  </div>
</template>
<style lang="sass" src="./OAlerts.sass" scoped></style>
<script src="./OAlerts.js"></script>
