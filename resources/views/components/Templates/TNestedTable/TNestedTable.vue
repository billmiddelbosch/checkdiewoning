<template>
  <div class="t-single-nested-table-template">
    <MHeader v-if="title" :title="title"></MHeader>
    <ARow
      v-for="(dataTableGroup, groupIndex) in dataTableGroups"
      :key="`grouprow-${groupIndex}`"
    >
      <ACol>
        <ODataTableGroup
          v-bind="dataTableGroup"
          @toggleDataTableChildren="event =&gt; $emit('toggleDataTableChildren', { groupIndex: groupIndex, data: event })"
          @filterChange="event =&gt; $emit('filterChange', { data:dataTableGroup, value: event })"
          @filterSubmit="event =&gt; $emit('filterSubmit', { data:dataTableGroup, value: event })"
          @filterChipClick="event =&gt; $emit('filterChipClick', { data:dataTableGroup, value: event })"
          @toggleFilter="event =&gt; $emit('toggleFilter', { data: dataTableGroup, value: event })"
          @sorting="event =&gt; $emit('sorting', { data: dataTableGroup, value: event })"
          @visibility="event =&gt; $emit('visibility', { data: dataTableGroup, value: event })"
          @pagination="event =&gt; $emit('pagination', { data: dataTableGroup, value: event })"
          ><template #contentGroup-actions
            ><AButton
              v-if="hasExport"
              color="link-only"
              size="sm"
              @click.native.prevent="$emit('exportAction', true)"
              ><AIcon icon="download" size="lg"></AIcon></AButton
            ><AButton
              v-if="button &amp;&amp; hasRight"
              size="sm"
              @click.native.prevent="$emit('buttonAction', true)"
              >{{ button }}</AButton
            ></template
          ></ODataTableGroup
        >
      </ACol>
    </ARow>
  </div>
</template>
<script src="./TNestedTable.js"></script>
