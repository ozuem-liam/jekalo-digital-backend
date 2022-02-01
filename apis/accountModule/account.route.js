const express = require('express');
const router = express.Router();
const { registrationSchema } = require('../../utils/validation-schemas/account');
const { account } = require('../../helpers/controller.repository');

router.post('/user', registrationSchema, account.createAccount);
router.get('/users', account.getUsers);
router.delete('/:username', account.deleteAUser);

module.exports = router;
