const {Thought, User} = require('../models');

const thoughtController = {
// get all thoughts
getThoughts(req, res) {
    // find() on your Thought model
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err)); 
},
// get single thought by id
getSingleThought(req, res){
    // findOne() on Thought Model
    Thought.findOne({_id: req.params.thoughtId})
    .then((thought) =>
    !thought
    ? res.status(404).json({message: "No thought with that id"})
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err)); 
},
//create a thought
createThought(req, res) {
    // use create() on Thought model
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => {
        return res.status(500).json(err);
    });
},
// update thought
updateThought(req, res) {
    // findOneAndUpdate() on Thought model
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$set: req.body},
        {runValidators: true, new: true}
    )
    .then((thought)=>
    !thought?res.status(404).json({message: 'No thought with this id!'})
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
// delete thought
deleteThought(req, res) {
    // findOneAndRemove() on Thought model
    Thought.findOneAndRemove ({_id: req.params.thoughtId})
    .then((thgouth) =>
    !thought?res.status(404).json({message: 'This thought does not exist'})
    : Thought.findOneAndUpdate (
        { users: req.params.userId},
        {$pull: {users: req.params.userId}},
        { new: true}
    )
    )
    .then((thought) =>
    !thought
      ? res.status(404).json({
          message: 'Thought deleted but no users founds',
        })
      : res.json({ message: 'Thought successfully deleted' })
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},
// add a reaction to a thought
addReaction (req, res) {
    // findOneAndUpdate
    // use $addtoSet - ref act 23, controllers/postController - check out how it's being used in the createPost
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet: {reactions: req.body}}, 
        {runValidators: true, new: true}
        )
        .then((user)=>
        !user
        ?res.status(404).json({message: 'No reaction to this thought found!'})
        :res.json(user)
        )
        .catch((err)=> res.status(500).json(err));
},
removeReaction(req, res) {
    //findOneAndUpdate
    // use $pull
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reaction: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((student) =>
          !student
            ? res
                .status(404)
                .json({ message: 'No reaction to this thought found!' })
            : res.json(student)
        )
        .catch((err) => res.status(500).json(err));
},
};

module.exports = thoughtController;