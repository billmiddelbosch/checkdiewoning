import { MFormDescription, MFormDescriptionModel } from './'

export default {
  title: 'Molecules/FormDescription',
  component: MFormDescription
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MFormDescription },
  template: '<MFormDescription v-bind="$props" />'
})

// Default
export const Default = Template.bind({})
Default.args = new MFormDescriptionModel({
  title: 'Lorem ipsum dolor sit amet',
  body: `
    Consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus.`
})

// With Top Margin
export const WithTopMargin = Template.bind({})
WithTopMargin.args = new MFormDescriptionModel({
  title: 'Lorem ipsum dolor sit amet',
  body: `
    Consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus.`,
  hasTopMargin: true
})

// Without Title
export const WithoutTitle = Template.bind({})
WithoutTitle.args = new MFormDescriptionModel({
  body: `
    Consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus.`
})
