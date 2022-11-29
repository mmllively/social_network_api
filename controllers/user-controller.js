const {User, Thought} = require('../models');

const userController = {
// get all users
getUsers(req, res) {
    // find() on User
},
// get single user by id
getSingleUser(req, res){
    // findOne() on User
    // use .populate to populate friends and thoughts for that User
    // ex: .populate('friends')
},
//update a user
updateUser(req, res) {
    // findOneAndUpdata
},
// delete user (BONUS: and delete associated thoughts)
deleteUser(req, res) {
    // findOneAndDelete
},
// add friend to friend list
addFriend(req, res) {
    // find One and Update
    // use $addtoSet - reference activity 23, controllers/postController - chcek out how it's being used in the createPost
},
// remove friend from friend list
removeFriend(req, res) {
    //findOneAndUpdate
    // use $pull
}
};

module.exports = userController;