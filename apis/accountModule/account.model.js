const mongoose = require('mongoose');
const { accountDBSchema } = require('./account.schema');

const Account = mongoose.model('Account', accountDBSchema);
module.exports = { Account };