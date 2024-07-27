const { Schema, model } = require('mongoose');

// Define User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Create a virtual property `friendCount` that gets the amount of friends per user
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model using the UserSchema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
