const { createValidator } = require('revalidate');

export const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
);

export const passwordMatch = (password) => createValidator(
  message => password2 => {
    if (password !== password2) {
      return message
    }
  },
  'Passwords do not match'
);



