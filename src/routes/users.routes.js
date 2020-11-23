const router = require('express').Router();
const { UsersController } = require('../controllers');

router
  .route('/')
  .post(UsersController.createOne)
  .get(UsersController.getAll)

module.exports = router;
