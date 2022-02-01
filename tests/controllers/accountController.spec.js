const sinon = require('sinon');
const assert = require('assert');
const rewire = require('rewire');
const httpMocks = require('node-mocks-http');
const { resetStubAndSpys } = require('../testHelper');

const accountController = require('../../apis/accountModule/account.controller');
const accountService = require('../../apis/accountModule/account.service');
const accountMock = require('../mocks/account.mock');
const messages = require('../../translation/messages.json');
const HttpStatusCode = require('../../models/HttpStatusCode');

describe('AccountController', async () => {
  const sandBox = sinon.createSandbox();
  afterEach(() => {
    resetStubAndSpys([sandBox]);
  });

  it('Create Account - Account username exist', async () => {
    const request = {
      body: { ...accountMock.registrationMockRequest },
    };
    sandBox
      .stub(accountService, 'createAccount')
      .returns({ isSuccess: false, message: messages['ACT-USERNAME-EXIST'] });
    const response = httpMocks.createResponse();
    await accountController.createAccount(request, response);
    const responseData = response._getData();
    assert.strictEqual(response.statusCode, HttpStatusCode.INVALID_REQUEST);
    assert.strictEqual(responseData.message, messages['ACT-USERNAME-EXIST']);
    assert.strictEqual(Object.keys(responseData.errors).length, 0);
  });
  it('Create Account - Success', async () => {
    const request = {
      body: { ...accountMock.registrationMockRequest },
    };
    sandBox
      .stub(accountService, 'createAccount')
      .returns({ isSuccess: true, message: messages['ACT-CREATED-SUCCESS'] });
    const response = httpMocks.createResponse();
    await accountController.createAccount(request, response);

    const responseData = response._getData();
    assert.strictEqual(response.statusCode, HttpStatusCode.SUCCESS);
    assert.strictEqual(responseData.message, messages['ACT-CREATED-SUCCESS']);
    assert.strictEqual(Object.keys(responseData.errors).length, 0);
  });
});
