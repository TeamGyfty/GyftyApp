const router = require('express').Router();
const requestRoutes = require('./requests');

// Article routes
router.use('/saved', requestRoutes);

module.exports = router;