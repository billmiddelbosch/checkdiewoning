<!-- eslint-disable vue/no-template-key -->
<template>
  <div>
    <MAlert icon="info-circle-o" v-if="description.title || description.body"
      ><template #title v-if="description.title">{{
        description.title
      }}</template
      >{{ description.body }}</MAlert
    >
    <ATable
      v-if="!isLoading"
      :isBordered="false"
      :isFullwidth="true"
      :isHoverable="false"
      :isStriped="true"
    >
      <template #head v-if="hasTableHeading">
        <th v-for="(field, fieldIndex) in fields" :key="fieldIndex">
          <MSorting
            v-if="field.isSortable"
            :order="field.order"
            @change="event =&gt; $_change('sorting', field, event)"
            >{{ field.label }}</MSorting
          >
          <template v-else>{{ field.label }}</template>
        </th>
      </template>

      <template #body>
        <template v-for="(row, rowIndex) in rows">
          <tr
            :class="[
              `a-table--row-${rowIndex % 2 === 0 ? 'odd' : 'even'}`,
              { 'o-datatable--has-children': $_hasChildren(row) },
            ]"
            :key="`tr-${rowIndex}`"
          >
            <component
              v-for="(field, fieldIndex) in fields"
              :key="`td-${fieldIndex}`"
              :is="mapFieldType(field.type)"
              :field="field"
              :data="row"
            ></component>
            <td class="o-datatable__toggle-column" v-if="$_hasNesting">
              <a
                class="o-datatable__toggle"
                v-if="$_hasChildren(row)"
                href=""
                @click.prevent.prevent="
                  $_change('visibility', row, !row.children.isVisible)
                "
                ><span>{{ row.children.data.count }}</span
                ><AIcon :icon="$_toggleIcon(row.children.isVisible)"></AIcon
              ></a>
            </td>
          </tr>
          <tr
            class="o-datatable__child-row"
            v-if="$_hasNesting"
            :key="`tr-${rowIndex}-children`"
          >
            <td :colspan="fields.length + 1">
              <ODataTable
                v-show="row.children.isVisible"
                v-if="$_hasChildren(row) &amp;&amp; row.children.data.rows.length"
                v-bind="row.children.data"
                @sorting="event =&gt; $_change('sorting', row, event)"
                @pagination="event =&gt; $_change('pagination', row, event)"
              ></ODataTable>
            </td>
          </tr>
        </template>
      </template>
    </ATable>
    <div class="o-datatable__loader" v-else>
      <ASpinner size="lg"></ASpinner>
    </div>
    <div class="o-datatable__pagination">
      <MPagination
        v-if="pagination.isVisible"
        v-bind="pagination"
        @change="event =&gt; $_change('pagination', pagination, event)"
      ></MPagination>
    </div>
  </div>
</template>
<style lang="sass" src="./ODataTable.sass" scoped></style>
<script src="./ODataTable.js"></script>
