const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {

        },
        email: {

        },
        thoughts: [
            {
                // references the Thought ObjectId
            },
        ],
        friends : [
            {
                // references the User ObjectId
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual for friendCount - reference activities 21 & 23

const User = model('User', userSchema);

module.exports = User;