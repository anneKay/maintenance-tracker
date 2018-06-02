export const inputEmpty = (str) => !str;

export const trimmedInputEmpty = (str) => str.trim().length < 1;

export const inputTooShort = (str, min) => str.trim().length < min;

export const inputTooLong = (str, max) => str.trim().length < max;

export const validateEmail = (str) => {
  if (inputEmpty(str) || trimmedInputEmpty(str)) {
    return { error: 'Email cannot be blank' }
  }

  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
  if (!emailRegex.test(str)) {
    return { error: 'Invalid email format'}
  }
  return {};
}

export const validateName = (str) => {
  if (inputEmpty(str) || trimmedInputEmpty(str)) {
    return { error: 'Name cannot be blank' }
  }

  if (inputTooShort(str, 3)) {
    return { error: 'Name must not be less than 3 characters' }
  }
  return {};
}

export const validatePassword = (str) => {
  if (!str) {
    return { error: 'Password must not be blank' }
  }

  if (str.length < 6) {
    return { error: 'Password must not be less than 6 characters' }
  }

  return {};
}

export const requestIdValid = (id) => {
  return Number.isInteger(Number(id))
}
