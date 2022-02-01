const accountService = require('./account.service');
const { validationResult } = require('express-validator');
const { sendSuccess, sendError } = require('../../helpers/response.format');

const createAccount = async (request, response) => {
    try {
    const errors = validationResult(request);
    const data = request.body;
    if (!errors.isEmpty()) {
      return sendError({ response, errors });
    }
    const { isSuccess, message, account } = await accountService.createAccount(data);
    if (isSuccess) {
      return sendSuccess({
        response,
        message,
        data: { account },
      });
    } else {
      return sendError({ response, message });
    }
  } catch (error) {
    return sendError({ response, message, error });
  }
};


const getUsers = async (request, response) => {
    const { isSuccess, data, message } = await accountService.getUsers();
    if (isSuccess) {
      return sendSuccess({ response, data });
    }
    
    return sendError({ response, message, code: HttpStatusCode.SERVER_ERROR });
  };


  const deleteAUser = async (request, response) => {
    const { username } = request.params;
    const { isSuccess, message } = await accountService.deleteAUser(username);
    if (isSuccess) {
      return sendSuccess({ response, message });
    }
    return sendError({ response, message, code: HttpStatusCode.SERVER_ERROR });
  };
  

module.exports = { createAccount, getUsers, deleteAUser };