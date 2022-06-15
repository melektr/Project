const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export const InputsForm = [
  {
    id:1,
    title: 'emailValue',
    type: 'input',
    iconSize:12,
    iconName:'user',
    returnKeyType: 'done',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    autoCapitalize: 'none',
    rules: {
      required: {
        value: true,
        message: {
          title: 'emailError',
          description: 'emailRequired'
        }
      },
      pattern: {
        value: EMAIL_REGEX,
        message: {
          title: 'emailError',
          description: 'emailInvalid'
        }

      }
    }
  },
  {
    id:2,
    title: 'passwordValue',
    type: 'password',
    iconName:'key',
    rightIconName:'eye',
    secureTextEntry: true,
    textContentType: 'password',
    autoCorrect: false,
    iconSize:16,
    returnKeyType: 'done',
    autoCapitalize: 'none',
  }
]

