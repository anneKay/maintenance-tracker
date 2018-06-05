import {
  inputEmpty, inputTooShort, inputTooLong, validateEmail, validateName, validatePassword
} from '../helpers/validateInput';

export const validateSignup = (req, res, next) => {
  const { email, name, password } = req.body;
  const errors = [];
  const checkEmail = validateEmail(email);
  const checkPassword = validatePassword(password);
  const checkName = validateName(name);

  if (checkEmail.error) {
    errors.push({
      inputType: 'email',
      violation: checkEmail.error
    })
  }

  if (checkName.error) {
    errors.push({
      inputType: 'name',
      violation: checkName.error
    })
  }

  if (checkPassword.error) {
    errors.push({
      inputType: 'password',
      violation: checkPassword.error
    })
  }

  if (errors.length > 0) {
    return res.status(400).send({
      errors
    })
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email || !email.trim()) {
    errors.push({
      inputType: 'email',
      violation: "Email must not be blank"
    })
  }

  if (!password) {
    errors.push({
      inputType: 'password',
      violation: 'Password must not be blank'
    })
  }

  if (errors.length > 0) {
    return res.status(400).send({
      errors
    })
  }

  next();
};