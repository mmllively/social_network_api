const { Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {

        },
        username: {

        },
        createdAt: {

        }
        },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// virtual for reaction count

module.exports = reactionSchema;