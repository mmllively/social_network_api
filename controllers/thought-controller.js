const {Thought, User} = require('../models');

const thoughtController = {
// get all thoughts
getThoughts(req, res) {
    // find() on your Thought model
},
// get single thought by id
getSingleThought(req, res){
    // findOne() on Thought Model

},
//create a thought
createThought(req, res) {
    // use create() on Thought model
},
// update thought
updateThought(req, res) {
    // findOneAndUpdate() on Thought model
},
// delete thought
deleteThought(req, res) {
    // findOneAndRemove() on Thought model
},
// add a reaction to a thought
addReaction (req, res) {
    // findOneAndUpdate
    // use $addtoSet - ref act 23, controllers/postController - check out how it's being used in the createPost
},
removeReaction(req, res) {
    //findOneAndUpdate
    // use $pull
},
};

module.exports = thoughtController;