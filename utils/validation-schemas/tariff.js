const { body } = require('express-validator');
const messages = require('../../translation/messages.json');

const FacilityRegistrationSchema = [
    body('facility_email_1')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-EMAIL-REQUIRED'] })
      .bail()
      .isEmail()
      .withMessage({ 'string.email': messages['FACILITY-EMAIL-INVALID'] }),
    body('facility_email_2')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-EMAIL-REQUIRED'] })
      .bail()
      .isEmail()
      .withMessage({ 'string.email': messages['FACILITY-EMAIL-INVALID'] }),
    body('facility_name').notEmpty().withMessage({ 'any.required': messages['FACILITY-NAME-REQUIRED'] }),
    body('facility_phone_number_1')
    .notEmpty()
    .withMessage({ 'any.required': messages['ACT-PHONE-NUMBER-REQUIRED'] }),
    body('facility_phone_number_2')
    .notEmpty()
    .withMessage({ 'any.required': messages['ACT-PHONE-NUMBER-REQUIRED'] }),
    body('location').notEmpty().withMessage({ 'any.required': messages['FACILITY-LOCATION-REQUIRED'] }),
    body('address').notEmpty().withMessage({ 'any.required': messages['FACILITY-ADDRESS-REQUIRED'] }),
    body('charge_per_trip')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-CHARGE-PER-TRIP-REQUIRED'] }),
    body('number_of_trips')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-NUMBER-OF-TRIPS-REQUIRED'] }),
    body('number_of_bins')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-NUMBER-OF-BINS-REQUIRED'] }),
    body('service_charge')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-SERVICE-CHARGE-REQUIRED'] }),
    body('status')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-STATUS-REQUIRED'] })
      .isIn(['Active', 'Completed'])
      .withMessage({ 'any.required': messages['FACILITY-STATUS-DO-NOT-EXIST'] }),
    body('servicing_psp')
      .notEmpty()
      .withMessage({ 'any.required': messages['FACILITY-SERVICING-PSP-REQUIRED'] }),
  ];
  

  module.exports = { FacilityRegistrationSchema }