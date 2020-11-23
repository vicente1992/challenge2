const express = require('express');

// Import Our custom middlewares
const { NotFoundMiddleware } = require('../middlewares');

// Routes
const { UserRoutes } = require('./index.routes');

const router = express.Router();

// Use middlewares
router.use(express.json());

router.use('/users', UserRoutes);


// Use custom middleware
router.use(NotFoundMiddleware);

module.exports = router;

