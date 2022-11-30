const {User, Thought} = require('../models');
const thoughtController = require('./thought-controller');

const userController = {
// get all users
getUsers(req, res) {
    // find() on User
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));  
},
// get single user by id
getSingleUser(req, res){
    // findOne() on User
    User.findOne({_id: req.params.userId})
    // use .populate to populate friends and thoughts for that User
    //TODO: check on this 'populate'
    .populate('friends')
    .populate('thoughts')
    // ex: .populate('friends')
    
    .then((user)=>
    !user
    ?res.status(404).json({message: 'No userid found!'})
    :res.json(user)
    )
    .catch((err)=> res.status(500).json(err));
    
},
//create a user
createUser(req, res) {
    // use create() on Thought model
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
        return res.status(500).json(err);
    });
},

//update a user 
updateUser(req, res) {
    // findOneAndUpdata
    User.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req.body}, 
        {runValidators: true, new: true}
        )
        .then((user)=>
        !user
        ?res.status(404).json({message: 'No user with this id!'})
        :res.json(user)
        )
        .catch((err)=> res.status(500).json(err));
    
},
// delete user (BONUS: and delete associated thoughts)
deleteUser(req, res) {
    // findOneAndDelete
    User.findOneAndDelete({_id: req.params.userId})
    .then((user) =>
    ! user
    ? res.status(404).json({ message: 'No user with that id!'})
    : Thought.deleteMany({_id: { $in: thought.users}})
    )
    .then(() => res.json({ message: 'Users and their thoughts deleted!'}))
    .catch((err) => res.status(500).json(err));
    },
// add friend to friend list
addFriend(req, res) {
    // find One and Update
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No friend found' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    // use $addtoSet - reference activity 23, controllers/postController - check out how it's being used in the createPost
},
// TODO: remove friend from friend list//
removeFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId }  },
        { runValidators: true, new: true }
      )
        .then((friend) =>
          !friend
            ? res
                .status(404)
                .json({ message: 'No friend found' })
            : res.json(student)
        )
        .catch((err) => res.status(500).json(err));
}
};

module.exports = userController;