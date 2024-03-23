import OOnboarding from './'
import AHeading from '../../Atoms/AHeading'
import { ARow, ACol } from '../../Atoms/AContainer'

export default {
  title: 'Organisms/Onboarding',
  component: OOnboarding,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OOnboarding, AHeading, ARow, ACol },
  template: `
    <OOnboarding v-bind="$props">
      <ARow>
        <ACol>
          <AHeading></AHeading>
          subtitle
        </ACol>
      </ARow>
    </OOnboarding>`
})

export const Default = Template.bind({})
Default.args = {
  onboardingKey: 'Articles',
  title: 'Hier vindt je al jouw gepubliceerde artikelen met de bijbehorende DMS status',
  content: '<p><strong>Je kunt hier:</strong><p><ul><li>Acties worden gevraagd vanuit je DMS en acties op basis van de GS1 data validaties.</li><li>Bekijken of een product betrouwbaar is gevonden door het DMS</li></ul>'
}
