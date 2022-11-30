const { Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
// Use Mongoose's ObjectId data type & Default value is set to a new ObjectId
type: Schema.Types.ObjectId,
default: () => new Types.ObjectId(),
        },
    
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
// Date - Set default value to the current timestamp & Use a getter method to format the timestamp on query
type: Date, default: Date.now
        }
        },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema;