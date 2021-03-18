import { ref } from 'vue'

export default function useAuth () {
  const email = ref('')
  const password = ref('')
  const nickname = ref('')

  const emailError = ref('')
  const passwordError = ref('')
  const nicknameError = ref('')

  const isValidNickname = () => {
    if (!nickname.value) {
      nicknameError.value = 'Please enter nickname'
    } else {
      nicknameError.value = ''
      return true
    }
  }

  const isValidEmail = () => {
    const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    const isValid = re.test(String(email.value).toLowerCase())
    if (isValid) {
      emailError.value = ''
      return true
    } else {
      emailError.value = 'Please enter email address in correct format'
      return false
    }
  }
  const isValidPassword = () => {
    if (password.value.length < 8) {
      passwordError.value = 'The password must contain at least 8 character'
      return false
    } else {
      passwordError.value = ''
      return true
    }
  }

  return {
    email,
    password,
    emailError,
    passwordError,
    isValidEmail,
    isValidPassword,
    isValidNickname,
    nicknameError,
    nickname
  }
}
