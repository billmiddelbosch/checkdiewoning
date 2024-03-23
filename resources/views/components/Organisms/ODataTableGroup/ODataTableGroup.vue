<template>
  <MContentGroup
    :isBordered="false"
    :isCollapsed="isCollapsed"
    :isCollapsible="true"
    :isFullwidth="true"
    @toggle="event =&gt; isCollapsed = event"
  >
    <template v-slot:header-left>
      <AHeading size="h4">{{ title }}</AHeading>
    </template>
    <template v-slot:header-right>
      <slot name="contentGroup-actions"></slot>
    </template>
    <template v-slot:body-content>
      <OFilter
        v-if="filter"
        v-bind="filter"
        @change="event =&gt; $emit('filterChange', event)"
        @toggleCollapse="event =&gt; $emit('toggleFilter', event)"
        @chipClick="event =&gt; $emit('filterChipClick', event)"
        @submit="event =&gt; $emit('filterSubmit', event)"
      ></OFilter>
    </template>

    <template v-slot:body-table>
      <ODataTable
        v-bind="dataTable"
        @sorting="event =&gt; $emit('sorting', event)"
        @visibility="event =&gt; $emit('visibility', event)"
        @pagination="event =&gt; $emit('pagination', event)"
      ></ODataTable>
    </template>
    <template v-slot:body-footer> </template>
  </MContentGroup>
</template>
<script src="./ODataTableGroup.js"></script>
