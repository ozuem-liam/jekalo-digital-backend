const mongoose = require('mongoose');

const account = {
    name_prefix: {
        type: String,
        maxlength: 3,
    },
    first_name: {
        type: String,
        required: true,
        maxlength: 15,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 15,
        trim: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    date_of_birth: {
        type: String,
        required: true,
        maxlength: 15,
    },
    timestamps: {
    immutable: true,
    type: Date,
    default: Date.now,
  },
};

const accountDBSchema = mongoose.Schema(account);
module.exports = { accountDBSchema };