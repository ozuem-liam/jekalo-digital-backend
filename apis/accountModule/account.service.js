const { Account } = require('./account.model');
const messages = require('../../translation/messages.json');

const createAccount = async ({
    first_name,
    last_name,
    username,
    date_of_birth,
}) => {
  try {
    let message;
    const exist = await Account.exists({ username });
    if (exist) {
      message = messages['ACT-USERNAME-EXIST'];
      return { isSuccess: false, message };
    }
    const prefix = `${first_name.slice(0, 1)}${last_name.slice(0,1)}`
    const account = await Account.create({
      name_prefix: prefix,
      first_name,
      last_name,
      username,
      date_of_birth,
    });
    if (account) {
      message = messages['ACT-LOGIN-SUCCESS'];
      return { isSuccess: true, message, account: formatAccountResponse(account) };
    }
  } catch (error) {
    return { isSuccess: false, message: error };
  }
};

const formatAccountResponse = (account) => {
    const {
      name_prefix,
      first_name,
      last_name,
      username,
      date_of_birth
    } = account;
  
    return {
      name_prefix,
      first_name,
      last_name,
      username,
      date_of_birth
    };
  };

  const getUsers = async () => {
    try {
      const users = await Account.find({});
      if (users) {
        return { isSuccess: true, data: users };
      }
    } catch (error) {
      const message = messages['NO-USER-FOUND'];
      return { isSuccess: false, message };
    }
  };


  const deleteAUser = async (username) => {
    let message;
    try {
      await Account.deleteOne({ username });
      message = messages['USER-DELETE-SUCCESS'];
      return { isSuccess: true, message };
    } catch (error) {
      message = messages['USER-DELETE-ERROR'];
      return { isSuccess: false, message };
    }
  };

module.exports = { createAccount, getUsers, deleteAUser };