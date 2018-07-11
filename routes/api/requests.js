
const router = require('express').Router();
const requestsController = require('../../controllers/requestController');

// Matches with "/api/saved"
router
  .route('/')
  .get(requestController.findAll)
  .post(requestController.create);

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .delete(requestController.remove);

module.exports = router;