const router = require('express').Router();
const postRoutes = require('./user-routes');
const userRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;