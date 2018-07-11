
const router = require('express').Router();
const requestsController = require('../../controllers/requestsController');

// Matches with "/api/saved"
router
  .route('/')
  .get(requestsController.findAll)
  .post(requestsController.create);

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .delete(requestsController.remove);

module.exports = router;