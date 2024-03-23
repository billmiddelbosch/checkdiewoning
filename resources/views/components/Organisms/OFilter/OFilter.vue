<template>
  <div class="o-filter">
    <ARow>
      <ACol>
        <div class="o-filter__heading">
          <a
            class="o-filter__toggle"
            href=""
            @click.prevent="$emit('toggleCollapse', !isCollapsed)"
          >
            <AButton color="link-only" :hasPadding="false">
              <AIcon size="lg" :icon="isCollapsed ? 'filter' : 'times'"></AIcon
              >{{ isCollapsed ? labelShowFilters : labelClose }}</AButton
            >
          </a>
          <div class="o-filter__chips">
            <div v-if="chips">
              <span v-for="(chip, chipIndex) in chips" :key="chipIndex">
                <MChip
                  @click="event =&gt; $emit('chipClick', { chip, value: event })"
                  >{{ chip }}</MChip
                >
              </span>
            </div>
          </div>
        </div>
      </ACol>
    </ARow>
    <div class="o-filter__wrapper" v-show="!isCollapsed">
      <ARow>
        <ACol
          :cols="columnWidth"
          v-for="(list, listIndex) in orderedList"
          :key="listIndex"
        >
          <AHeading size="h5" :hasMargin="true">{{ list.data.label }}</AHeading>
          <ARadioCheck
            :type="list.data.type"
            :options="list.data.options"
            @change="event =&gt; $emit('change', { list, listIndex, values: event })"
          ></ARadioCheck>
        </ACol>
      </ARow>
      <ARow class="o-filter__buttons" v-if="submit">
        <ACol>
          <AButton
            :size="submit.size"
            :type="submit.type"
            @click.native.prevent="$emit('submit', true)"
            >{{ submit.label }}</AButton
          >
        </ACol>
      </ARow>
    </div>
  </div>
</template>
<style lang="sass" src="./OFilter.sass" scoped></style>
<script src="./OFilter.js"></script>
