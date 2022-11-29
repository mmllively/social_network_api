const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: [reactionSchema] // reference activity 17 & 18
        },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// virtual for reaction count

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;