import MOverlay from './MOverlay.vue'
import MBottomSheet from '../MBottomSheet/MBottomSheet.vue'

export default {
  title: 'Molecules/Overlay',
  component: MOverlay,
  argTypes: {
    isVisible: { control: { type: 'boolean' } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MOverlay, MBottomSheet },
  data () {
    return { }
  },
  template: `<MOverlay v-bind="$props">
      <MBottomSheet>
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-sm-12 col-md-6 mb-5">
              <div>
                <h2>Welkom bij Mijn GS1</h2>
                <p>
                  Om te kunnen starten hebben we nog een aantal gegevens van jou
                  nodig. Check je huidige gegevens en vul aan.
                </p>
              </div>
              <div class="form-group mt-4">
                <Button
                  ref="submitButton"
                  class="btn btn-primary is-size-md text-only"
                >
                  Check en vul aan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MBottomSheet>
    </MOverlay>`
})

export const Default = Template.bind({})
Default.args = {
  isVisible: true
}
