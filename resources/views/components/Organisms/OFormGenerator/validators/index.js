import englishMsg from '../en.json'
import dutchMsg from '../nl.json'

import validateInternationalPhone from '../../../../lib/validators/internationalPhones'
import validateDutchPhone from '../../../../lib/validators/dutchPhones'
import validateDutchPostalCode from '../../../../lib/validators/dutchPostalCodes'
import VATNumberService from '../../../../services/VATNumberService'

import { isNil } from 'lodash'

const errorMessages = {
  en: { ...englishMsg },
  nl: { ...dutchMsg }
}

function checkEmpty (value, required, message) {
  if (!value || value === '') {
    if (required) {
      return [message]
    } else {
      return []
    }
  }
  return null
}
function msg (text) {
  if (text != null && arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      text = text.replace('{' + (i - 1) + '}', arguments[i])
    }
  }

  return text
}

const customValidators = {
  companyName (value, field, model) {
    const lang = this.$i18n.locale
    let isValid = true

    const res = checkEmpty(
      value,
      field.required,
      msg(errorMessages[lang].fieldIsRequired)
    )
    if (res != null) return res

    const err = []
    const re = /^\w[\w.\-#&'\s]*$/

    if (re.test(value)) {
      if (!isNil(field.min) && value.length < field.min) {
        err.push(
          msg(errorMessages[lang].textTooSmall, value.length, field.min)
        )

        isValid = false
      }

      if (!isNil(field.max) && value.length > field.max) {
        err.push(msg(errorMessages[lang].textTooBig, value.length, field.max))

        isValid = false
      }
    } else {
      err.push(errorMessages[lang].thisNotText)

      isValid = false
    }

    if (isValid) {
      return []
    } else {
      return err
    }
  },
  hasDocument (value, field, model) {
    const lang = this.$i18n.locale
    const res = checkEmpty(
      value,
      field.required,
      msg(errorMessages[lang].fieldIsRequired)
    )
    if (res != null) return res
    return []
  },
  alphaMinMax (value, field, model) {
    const lang = this.$i18n.locale
    let isValid = true

    const res = checkEmpty(
      value,
      field.required,
      msg(errorMessages[lang].fieldIsRequired)
    )
    if (res != null) return res

    const err = []
    const re = /^[a-zA-ZÀ-ž\- ]*$/
    if (re.test(value)) {
      if (!isNil(field.min) && value.length < field.min) {
        err.push(
          msg(errorMessages[lang].textTooSmall, value.length, field.min)
        )
        isValid = false
      }

      if (!isNil(field.max) && value.length > field.max) {
        err.push(msg(errorMessages[lang].textTooBig, value.length, field.max))
        isValid = false
      }
    } else {
      err.push(errorMessages[lang].thisNotText)
      isValid = false
    }

    if (isValid) {
      return []
    } else {
      return err
    }
  },
  emailMinMax (value, field, model) {
    const lang = this.$i18n.locale
    const res = checkEmpty(
      value,
      field.required,
      errorMessages[lang].fieldIsRequired
    )
    if (res != null) return res

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
    if (!re.test(value)) {
      return [msg(errorMessages[lang].invalidEmail)]
    }
    const err = []
    let isValid = true
    if (!isNil(field.min) && value.length < field.min) {
      err.push(msg(errorMessages[lang].textTooSmall, value.length, field.min))
      isValid = false
    }

    if (!isNil(field.max) && value.length > field.max) {
      err.push(msg(errorMessages[lang].textTooBig, value.length, field.max))
      isValid = false
    }

    if (isValid) {
      return []
    } else {
      return err
    }
  },

  async vatNumberValidationNL (btwNumber) {
    const lang = this.$i18n.locale
    if (btwNumber) {
      if (btwNumber.length > 3) {
        return Promise.all([vatNumberValidation(btwNumber)]).then(response => {
          var isValid = response[0].data?.payload?.isValid

          if (isValid && btwNumber.slice(0, 2).toLowerCase() === 'nl') {
            return []
          } else {
            return msg(errorMessages[lang].vatNotValid)
          }
        })
      } else if (btwNumber.length > 0) {
        return msg(errorMessages[lang].vatNotValid)
      } else {
        return []
      }
    }
    return []
  },

  async vatNumberValidation (btwNumber, field, model) {
    var selectedCountry = ((model?.address?.countryCode) || JSON.parse(localStorage.getItem('account'))?.address?.countryCode)
    const lang = this.$i18n.locale
    if (btwNumber) {
      if (
        btwNumber.length > 3 &&
        VATNumberService.getVATRegex(selectedCountry) !== null
      ) {
        return Promise.all([vatNumberValidation(btwNumber)]).then(response => {
          var isValid = response[0].data?.payload?.isValid
          if (
            isValid &&
            btwNumber.slice(0, 2).toLowerCase() ===
              selectedCountry.toLowerCase()
          ) {
            return []
          } else {
            return msg(errorMessages[lang].vatNotValid)
          }
        })
      } else if (
        btwNumber.length > 0 &&
        VATNumberService.getVATRegex(selectedCountry) !== null
      ) {
        return msg(errorMessages[lang].vatNotValid)
      } else {
        return []
      }
    }
    return []
  },

  dutchPhone (value, field, model) {
    const lang = this.$i18n.locale
    const isValid = validateDutchPhone(value)

    const res = checkEmpty(
      value,
      field.required,
      errorMessages[lang].fieldIsRequired
    )
    if (res != null) return res

    if (isValid) {
      return []
    } else {
      return [errorMessages[lang].invalidDutchPhone]
    }
  },

  internationalPhone (value, field, model) {
    const lang = this.$i18n.locale
    const isValid = validateInternationalPhone(value)

    const res = checkEmpty(
      value,
      field.required,
      errorMessages[lang].fieldIsRequired
    )
    if (res != null) return res

    if (isValid) {
      return []
    } else {
      return [errorMessages[lang].invalidDutchPhone]
    }
  },

  dutchPostalCode (value, field, model) {
    const lang = this.$i18n.locale
    const isValid = validateDutchPostalCode(value)

    const res = checkEmpty(
      value,
      field.required,
      errorMessages[lang].fieldIsRequired
    )
    if (res != null) return res

    if (isValid) {
      return []
    } else {
      return [errorMessages[lang].invalidDutchPostalCode]
    }
  }
}

async function vatNumberValidation (btwNumber) {
  return await VATNumberService.isVATNumberValid(btwNumber)
}

export default customValidators
