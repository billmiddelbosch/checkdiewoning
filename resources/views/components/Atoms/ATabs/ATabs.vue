<template>
  <div class="a-tabs">
    <div class="a-tabs__nav">
      <ul class="a-tabs__nav-items">
        <li
          class="a-tabs__nav-item"
          v-for="(tab, index) in tabs"
          :key="`tab-nav-${index}`"
        >
          <a
            :class="[
              'a-tabs__nav-link',
              { 'a-tabs__nav-link--active': tab.isVisible },
            ]"
            href=""
            @click.prevent="setActive(index)"
            >{{ tab.label }}</a
          >
        </li>
      </ul>
      <div class="a-tabs__nav-header">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="a-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="sass" src="./ATabs.sass" scoped></style>
<script src="./ATabs.js"></script>
