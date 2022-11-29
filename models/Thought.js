const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,

        },
        createdAt: {
//TODO: Date - Set default value to the current timestamp & Use a getter method to format the timestamp on query
            timestamps: true,
        },
        username: {
            type: String,
            required: true,

        },
        reactions: [reactionSchema], // reference activity 17 & 18
        lastAccessed: { type: Date, default: Date.now },
        },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


// virtual for reaction count called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;