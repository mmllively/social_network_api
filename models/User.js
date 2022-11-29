const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            //TODO: add match a valid email address
            match: /.+\@.+\..+/,

        },
        thoughts: [
            {
                // references the Thought ObjectId
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends : [
            {
                // references the User ObjectId
                type: Schema.Types.ObjectId,
                ref: 'User',
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

// virtual for friendCount that retrieves the length of the user's friends array field on query.- reference activities 21 & 23
userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;