const { body } = require('express-validator'),
  messages = require('../../translation/messages.json');

const registrationSchema = [
  body('first_name').notEmpty().withMessage({ 'any.required': messages['ACT-FIRSTNAME-REQUIRED'] }),
  body('last_name').notEmpty().withMessage({ 'any.required': messages['ACT-LASTNAME-REQUIRED'] }),
  body('username').notEmpty().withMessage({ 'any.required': messages['ACT-USERNAME-REQUIRED'] }),
  body('date_of_birth')
    .notEmpty()
    .withMessage({ 'any.required': messages['ACT-DATE-OF-BIRTH-REQUIRED'] }),
];

module.exports = { registrationSchema };
