import ASelect from './ASelect.vue'

export default {
  title: 'Atoms/Select',
  component: ASelect,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'large']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ASelect },
  template: '<ASelect v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Selecteer',
  options: [
    {
      label: 'Label 1',
      value: 1,
      disabled: false
    },
    {
      label: 'Label 2',
      value: 2,
      disabled: false
    },
    {
      label: 'Label 3',
      value: 3,
      disabled: true
    }
  ]
}
