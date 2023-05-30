const { Schema, model } = require('mongoose');


var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
      
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
   
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', UserSchema);

module.exports = User;
