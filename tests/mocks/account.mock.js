const faker = require('faker');
const messages = require('../../translation/messages.json');



const registrationMockRequest = {
    id: 'dummyid',
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    username: faker.name.middleName(),
    date_of_birth: faker.date.past(),
  },
 deleteAUserMockRequest = {
    username: faker.name.middleName(),
  },

  createAccountResponse = {
    account: registrationMockRequest,
    isSuccess: true,
    message: messages['ACT-LOGIN-SUCCESS'],
  };
module.exports = { deleteAUserMockRequest, registrationMockRequest, createAccountResponse };
