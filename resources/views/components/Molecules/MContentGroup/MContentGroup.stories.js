import MContentGroup from './'
import AButton from '../../Atoms/AButton'
import AHeading from '../../Atoms/AHeading'

export default {
  title: 'Molecules/ContentGroup',
  component: MContentGroup,
  argTypes: {
    isBordered: { control: { type: 'select', options: [true, false] } },
    isCollapsed: { control: { type: 'select', options: [true, false] } },
    isCollapsible: { control: { type: 'select', options: [true, false] } },
    isFullwidth: { control: { type: 'select', options: [true, false] } },
    bgColor: { control: { type: 'select', options: [null, 'white', 'ui-1', 'ui-2', 'ui-3', 'ui-4', 'ui-5', 'ui-8'] } },
    customBgColor: { control: { type: 'color' } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MContentGroup, AButton, AHeading },
  data () {
    return {
      collapsed: this.isCollapsed
    }
  },
  template: `
    <MContentGroup
      :isBordered="$props.isBordered"
      :isCollapsed="$data.collapsed"
      :isCollapsible="$props.isCollapsible"
      :isFullwidth="$props.isFullwidth"
      :bgColor="$props.bgColor"
      :style="{ backgroundColor: $props.customBgColor }"
      @toggle="event => $data.collapsed = event"
    >
      <template v-slot:header-left>
      <AHeading size="h4">Some Title</AHeading>
      </template>
      <template v-slot:header-right>
      <AButton>Some Action</AButton>
      </template>
      <template v-slot:body-content>
        body content here
      </template>
      <template v-slot:body-table>
        body table
      </template>
    </MContentGroup>`,
  watch: {
    isCollapsed () {
      this.$data.collapsed = this.isCollapsed
    }
  }
})

export const Default = Template.bind({})
Default.args = {
}

export const Full = Template.bind({})
Full.args = {
  isBordered: true,
  isCollapsible: true,
  isFullwidth: true
}

export const isBordered = Template.bind({})
isBordered.args = {
  isBordered: true
}

export const isCollapsible = Template.bind({})
isCollapsible.args = {
  isCollapsible: true
}

export const isFullwidth = Template.bind({})
isFullwidth.args = {
  isFullwidth: true
}

export const isCollapsed = Template.bind({})
isCollapsed.args = {
  isCollapsed: true,
  isCollapsible: true
}

const TemplateWithSubs = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MContentGroup, AButton },
  data () {
    return {
      collapsed: this.isCollapsed,
      collapsedSubGroup: true
    }
  },
  template: `
    <MContentGroup
      :isBordered="$props.isBordered"
      :isCollapsed="$data.collapsed"
      :isCollapsible="$props.isCollapsible"
      :isFullwidth="$props.isFullwidth"
      :bgColor="$props.bgColor"
      :style="{ backgroundColor: $props.customBgColor }"
      @toggle="event => $data.collapsed = event"
    >
      <template v-slot:header-left>
        <h4>Some Title</h4>
      </template>
      <template v-slot:body-subgroup>
        <MContentGroup
          :isBordered="false"
          :isCollapsed="$data.collapsedSubGroup"
          :isCollapsible="$props.isCollapsible"
          :isFullwidth="$props.isFullwidth"
          @toggle="event => $data.collapsedSubGroup = event"
        >
          <template v-slot:header-left>
            <h6>Some Title</h6>
          </template>
          <template v-slot:body-content>
            ...
          </template>
        </MContentGroup>
      </template>
    </MContentGroup>`,
  watch: {
    isCollapsed () {
      this.$data.collapsed = this.isCollapsed
    }
  }
})

export const SubGroups = TemplateWithSubs.bind({})
SubGroups.args = {
  isBordered: true,
  isCollapsible: true
}

export const SubGroupsFullWidth = TemplateWithSubs.bind({})
SubGroupsFullWidth.args = {
  isBordered: true,
  isCollapsible: true,
  isFullwidth: true
}
