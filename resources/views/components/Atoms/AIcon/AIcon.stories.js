import AIcon from './'
import IconList from './icons.json'

export default {
  title: 'Atoms/Icon',
  component: AIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      }
    },
    icon: {
      control: {
        type: 'select',
        options: [...Object.keys(IconList)]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AIcon },
  template: '<AIcon v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  icon: 'download'
}

const AllIconsTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AIcon },
  template: '<div><div v-for="icon in icons" :key="icon" style="display: inline-block; margin: 15px; text-align:center; width: 150px; font-family: arial;"><AIcon size="xl" :icon="icon" /><div><small>{{icon}}</small></div></div></div>'
})

export const AllIcons = AllIconsTemplate.bind({})
AllIcons.args = {
  icons: Object.keys(IconList)
}
