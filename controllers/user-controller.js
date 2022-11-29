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
    .populate('friends', 'thoughts')
    // ex: .populate('friends')
},
//update a user
updateUser(req, res) {
    // findOneAndUpdata
    User.findOneAndUpdate(
        {_id: req.params.userId}
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
        {_id: req.params.userId},
        { $addtoSet: {friends: friend._id}},
        { new: true}
    )
    // use $addtoSet - reference activity 23, controllers/postController - chcek out how it's being used in the createPost
},
// TODO: remove friend from friend list//
removeFriend(req, res) {
    //findOneAndUpdate
    User.findOneAndRemove({_id: req.params.friend})
    .then((user)=>
    !friends)
    // use $pull
}
};

module.exports = userController;