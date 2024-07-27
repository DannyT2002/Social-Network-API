const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const thoughtRoutes = require('./api/thought-routes');

// Add prefix of `/api` to routes created in `user-routes.js` and `thought-routes.js`
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
