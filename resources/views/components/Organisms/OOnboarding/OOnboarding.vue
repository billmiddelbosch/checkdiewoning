<template>
  <div v-if="onboardingKey &amp;&amp; title || onboardingKey &amp;&amp; text">
    <div :class="$_classes" v-if="isVisible">
      <ARow>
        <ACol>
          <div class="o-onboarding__title" v-html="title"></div>
          <a
            class="o-onboarding__close-link"
            @click.prevent="close"
            role="button"
          >
            <AIcon class="o-onboarding__close" icon="times" size="xl"></AIcon>
          </a>
          <div class="o-onboarding__inset">
            <div v-html="text"></div>
          </div>
        </ACol>
      </ARow>
    </div>
    <div class="o-onboarding__show" v-else>
      <a class="o-onboarding__show-link" @click.prevent="open" role="button">
        <AIcon
          class="o-onboarding__open"
          icon="question-circle-o"
          size="md"
        ></AIcon>
      </a>
    </div>
  </div>
</template>
<style lang="sass" src="./OOnboarding.sass" scoped></style>
<script src="./OOnboarding.js"></script>
